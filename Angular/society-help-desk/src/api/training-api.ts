import { Injectable, inject, signal, computed } from '@angular/core';
import {
  HttpClient, HttpErrorResponse, HttpInterceptorFn, HttpResponse
} from '@angular/common/http';
import { Observable, defer, of, throwError } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';

/** Chapter 06 uses a *real HttpClient/interceptor chain*, but NO network requests.
 * The final interceptor handles /api/training locally. All records are fictional.
 * A production app would REMOVE mockBackendInterceptor and call the real server.
 */
export interface TrainingComplaint {
  readonly id:number;
  readonly title:string;
  readonly status:'Open'|'Resolved';
}
@Injectable({providedIn:'root'})
export class MockTrainingBackend {
  private readonly data=signal<readonly TrainingComplaint[]>([
    {id:201,title:'Lift inspection',status:'Open'},
    {id:202,title:'Water pressure',status:'Resolved'}
  ]);
  readonly complaints=this.data.asReadonly();
  readonly calls=signal(0);
  private nextId=203;
  readonly transientAttempts=signal(0);
  getAll(status:string|null):TrainingComplaint[] {
    return this.data().filter(row=>!status||row.status===status);
  }
  create(title:string):TrainingComplaint {
    const row:TrainingComplaint={id:this.nextId++,title:title.trim()||'New sample issue',status:'Open'};
    this.data.update(list=>[...list,row]);return row;
  }
  update(id:number):TrainingComplaint|null {
    let selected:TrainingComplaint|null=null;
    this.data.update(list=>list.map(row=>{
      if(row.id!==id)return row;
      selected={...row,status:row.status==='Open'?'Resolved':'Open'};
      return selected;
    }));
    return selected;
  }
  delete(id:number):boolean {
    const exists=this.data().some(row=>row.id===id);
    this.data.update(list=>list.filter(row=>row.id!==id));
    return exists;
  }
  reset():void {
    this.data.set([
      {id:201,title:'Lift inspection',status:'Open'},
      {id:202,title:'Water pressure',status:'Resolved'}
    ]);
    this.nextId=203;this.calls.set(0);this.transientAttempts.set(0);
  }
}

@Injectable({providedIn:'root'})
export class RequestTrace {
  readonly events=signal<readonly string[]>([]);
  readonly loading=signal(0);
  readonly lastHeader=signal('none');
  readonly errors=signal(0);
  append(message:string):void {
    this.events.update(list=>[message,...list].slice(0,14));
  }
  clear():void {this.events.set([]);this.loading.set(0);this.errors.set(0);this.lastHeader.set('none');}
}

/** Demonstration header is NOT a real credential. Never store real JWTs here. */
export const trainingAuthInterceptor: HttpInterceptorFn=(req,next)=>{
  if(!req.url.startsWith('/api/training'))return next(req);
  const trace=inject(RequestTrace);
  trace.append('AUTH: cloned request with X-Training-Token (not a JWT)');
  return next(req.clone({setHeaders:{'X-Training-Token':'DEMO-ONLY','X-Client':'Techlambda-Lab'}}));
};
export const trainingLogInterceptor: HttpInterceptorFn=(req,next)=>{
  if(!req.url.startsWith('/api/training'))return next(req);
  const trace=inject(RequestTrace);
  trace.loading.update(n=>n+1);
  trace.append('REQUEST: '+req.method+' '+req.urlWithParams);
  return next(req).pipe(
    tap(event=>{
      if(event instanceof HttpResponse){
        trace.lastHeader.set(req.headers.get('X-Training-Token')??'missing');
        trace.append('RESPONSE: '+event.status+' '+req.method);
      }
    }),
    finalize(()=>{trace.loading.update(n=>Math.max(0,n-1));trace.append('FINALIZE: loading finished');})
  );
};
export const trainingErrorInterceptor: HttpInterceptorFn=(req,next)=>{
  if(!req.url.startsWith('/api/training'))return next(req);
  const trace=inject(RequestTrace);
  return next(req).pipe(catchError((error:unknown)=>{
    if(error instanceof HttpErrorResponse){
      trace.errors.update(n=>n+1);
      trace.append('ERROR: HTTP '+error.status+' handled and rethrown');
    }
    return throwError(()=>error);
  }));
};

/** The final handler simulates server responses through HttpResponse events.
 * defer() ensures each subscription/retry invokes the backend again.
 * There is no outbound HTTP fetch for /api/training.
 */
export const mockBackendInterceptor: HttpInterceptorFn=(req,next)=>{
  if(!req.url.startsWith('/api/training'))return next(req);
  const backend=inject(MockTrainingBackend);
  return defer(()=>{
    backend.calls.update(n=>n+1);
    const path=req.url.split('?')[0];
    const body=req.body as {title?:string}|null;
    const parts=path.split('/').filter(Boolean);
    const id=Number(parts[3]??0);
    if(path==='/api/training/unauthorized'){
      return throwError(()=>new HttpErrorResponse({status:401,statusText:'Unauthorized (training error)',url:req.url}));
    }
    if(path==='/api/training/fail'){
      return throwError(()=>new HttpErrorResponse({status:403,statusText:'Forbidden (training error)',url:req.url}));
    }
    if(path==='/api/training/server-error'){
      return throwError(()=>new HttpErrorResponse({status:500,statusText:'Mock server error',url:req.url}));
    }
    if(path==='/api/training/transient'){
      backend.transientAttempts.update(n=>n+1);
      if(backend.transientAttempts()<3)
        return throwError(()=>new HttpErrorResponse({status:503,statusText:'Retry example',url:req.url}));
      return of(new HttpResponse({status:200,body:{message:'Succeeded after retry'}})).pipe(delay(120));
    }
    if(path==='/api/training/employees')
      return of(new HttpResponse({status:200,body:['Nia — Maintenance','Sam — Reception']})).pipe(delay(120));
    if(path==='/api/training/transfer')
      return of(new HttpResponse({status:200,body:{message:'Mock transfer recorded locally, no funds moved'}})).pipe(delay(120));
    if(parts[2]!=='complaints'){
      return throwError(()=>new HttpErrorResponse({status:404,statusText:'Mock route not found',url:req.url}));
    }
    let result:HttpResponse<unknown>;
    if(req.method==='GET' && !parts[3]){
      result=new HttpResponse({status:200,body:backend.getAll(req.params.get('status'))});
    }else if(req.method==='POST' && !parts[3]){
      result=new HttpResponse({status:201,body:backend.create(body?.title??'Sample complaint')});
    }else if(req.method==='PUT' && id>0){
      const row=backend.update(id);
      if(!row)return throwError(()=>new HttpErrorResponse({status:404,url:req.url,statusText:'Complaint not found'}));
      result=new HttpResponse({status:200,body:row});
    }else if(req.method==='DELETE' && id>0){
      const exists=backend.delete(id);
      if(!exists)return throwError(()=>new HttpErrorResponse({status:404,url:req.url,statusText:'Complaint not found'}));
      result=new HttpResponse({status:204,body:null});
    }else{
      return throwError(()=>new HttpErrorResponse({status:405,url:req.url,statusText:'Method not supported'}));
    }
    return of(result).pipe(delay(120));
  });
};

/** Service layer: strongly typed API boundary. HttpClient stays out of templates. */
@Injectable({providedIn:'root'})
export class TrainingApi {
  private readonly http=inject(HttpClient);
  readonly base='/api/training';
  getComplaints(status?:'Open'|'Resolved'):Observable<TrainingComplaint[]> {
    return this.http.get<TrainingComplaint[]>(this.base+'/complaints', {
      params:status?{status}:{}
    });
  }
  postComplaint(title:string):Observable<TrainingComplaint> {
    return this.http.post<TrainingComplaint>(this.base+'/complaints',{title});
  }
  putComplaint(id:number):Observable<TrainingComplaint> {
    return this.http.put<TrainingComplaint>(this.base+'/complaints/'+id,{status:'Resolved'});
  }
  deleteComplaint(id:number):Observable<void> {
    return this.http.delete<void>(this.base+'/complaints/'+id);
  }
  getEmployees():Observable<string[]> {
    return this.http.get<string[]>(this.base+'/employees');
  }
  transferMock():Observable<{message:string}> {
    return this.http.post<{message:string}>(this.base+'/transfer',{amount:100});
  }
  getFailure(kind:'unauthorized'|'fail'|'server-error'):Observable<unknown> {
    return this.http.get(this.base+'/'+kind);
  }
  getTransient():Observable<{message:string}> {
    return this.http.get<{message:string}>(this.base+'/transient');
  }
}

