import { Component, DestroyRef, computed, effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import {
  AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from, of
} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, filter, map, mergeMap,
  retry, switchMap, take, tap
} from 'rxjs/operators';
import { chapterTopicById, courseSubtopicById } from '../lab/course-catalog';
import { MockTrainingBackend, RequestTrace, TrainingApi } from './training-api';
import { TrainingStore } from './training-store';
import { CH06_NOTES, type Ch06Note } from './training-notes';

/**
 * One Angular component for 120 source-aligned labs, with EIGHT topic engines.
 * Each lab selects its own concept and code snippet; every button invokes
 * actual Angular HttpClient/RxJS/Signals logic (no simulated source-code output).
 */
@Component({
  standalone:true,
  imports:[RouterLink],
  templateUrl:'./training-execution.html',
  styleUrl:'./training-execution.css'
})
export class Chapter06Execution {
  private readonly route=inject(ActivatedRoute);
  private readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
  private readonly destroyRef=inject(DestroyRef);
  readonly api=inject(TrainingApi);
  readonly backend=inject(MockTrainingBackend);
  readonly trace=inject(RequestTrace);
  readonly store=inject(TrainingStore);

  readonly topic=computed(()=>chapterTopicById('06',this.params().get('topic')));
  readonly lesson=computed(()=>courseSubtopicById('06',this.params().get('topic'),this.params().get('subtopic')));
  readonly labNumber=computed(()=>Number(this.lesson()?.id.match(/lab-(\d+)/)?.[1]??1));
  readonly note=computed<Ch06Note|undefined>(()=>CH06_NOTES[this.topic()?.id??'']?.[this.lesson()?.id??'']);

  readonly apiOutput=signal('Choose a request; inspect HTTP method, status and interceptor trace.');
  readonly rxOutput=signal<readonly string[]>([]);
  readonly subscriptionCount=signal(0);
  readonly count=signal(0);
  readonly user=signal({name:'Aarav',city:'Gurugram'});
  readonly signalList=signal<readonly string[]>(['Water issue','Lift issue']);
  readonly sampleTitle=signal('Parking complaint');
  readonly signalLoggedIn=signal(false);
  readonly price=signal(200);
  readonly quantity=signal(3);
  readonly firstName=signal('Aarav');
  readonly lastName=signal('Sharma');
  readonly closed=signal(2);
  readonly employees=signal(5);
  readonly activeEmployees=signal(3);
  readonly mockBalance=signal(5000);
  readonly mockWithdrawal=signal(500);
  readonly theme=signal<'light'|'dark'>('light');
  readonly effectCount=signal(0);
  readonly effectMessage=signal('Effect will record tracked signal updates.');
  readonly storageMessage=signal('Theme and demo display name not stored yet.');
  readonly effectRuns=signal(0);
  readonly newUser=signal('Nia');
  readonly search=signal('Water');
  readonly statusFilter=signal<'All'|'Open'|'Resolved'>('All');

  readonly total=computed(()=>this.price()*this.quantity());
  readonly tax=computed(()=>this.total()*0.18);
  readonly grandTotal=computed(()=>this.total()+this.tax());
  readonly fullName=computed(()=>this.firstName().trim()+' '+this.lastName().trim());
  readonly pending=computed(()=>Math.max(0,this.count()-this.closed()));
  readonly percentage=computed(()=>this.count()>0?Math.round(this.closed()*100/this.count()):0);
  readonly inactiveEmployees=computed(()=>Math.max(0,this.employees()-this.activeEmployees()));
  readonly remainingBalance=computed(()=>this.mockBalance()-this.mockWithdrawal());

  private readonly notification$=new Subject<string>();
  private readonly latestUser$=new BehaviorSubject('Aarav');
  readonly notifications=signal<readonly string[]>([]);
  readonly latestUser=signal('Aarav');
  readonly subscriberB=signal('no event yet');

  constructor() {
    // Real subscribers to a HOT subject; destroy-safe via Angular DestroyRef.
    this.notification$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value=>this.notifications.update(items=>['Desk A: '+value,...items].slice(0,8)));
    this.notification$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value=>this.subscriberB.set('Desk B: '+value));
    this.latestUser$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value=>this.latestUser.set(value));

    // effect() is for observable side effects, not computed state propagation.
    effect(()=>{
      const sample='count='+this.effectCount()+
        ', theme='+this.theme()+', name='+this.fullName()+
        ', open tickets='+this.store.open();
      // Classroom-only browser side effect: store theme and fictitious display name.
      // Never persist passwords, tokens or real personal information here.
      let storage='Browser storage not available.';
      try {
        if(typeof localStorage!=='undefined'){
          localStorage.setItem('techlambda.ch06.theme',this.theme());
          localStorage.setItem('techlambda.ch06.demoName',this.fullName());
          storage='Saved demo theme/name to localStorage (not transmitted).';
        }
      }catch{storage='Browser storage blocked; the reactive effect still worked.';}
      untracked(()=>{
        this.effectMessage.set('Angular effect executed: '+sample);
        this.storageMessage.set(storage);
        this.effectRuns.update(v=>v+1);
      });
    });
  }
  readValue(event:Event):string{return (event.target as HTMLInputElement).value;}
  readNumber(event:Event):number {const n=Number(this.readValue(event));return Number.isFinite(n)?n:0;}

  /** Real HttpClient responses travel through withInterceptors + mock backend. */
  private consume<T>(request$:Observable<T>):void {
    this.apiOutput.set('Request in progress...');
    request$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:value=>this.apiOutput.set(JSON.stringify(value,null,2)??'HTTP 204 No Content'),
      error:(error:unknown)=>{
        this.apiOutput.set(error instanceof HttpErrorResponse
          ? 'HTTP '+error.status+' '+error.statusText+
            '. Error surfaced to subscriber after the interceptor.'
          : 'Unexpected error: '+String(error));
      }
    });
  }
  doGet():void {
    this.consume(this.api.getComplaints(this.statusFilter()==='All'?undefined:this.statusFilter()));
  }
  doPost():void {this.consume(this.api.postComplaint(this.sampleTitle()));}
  doPut():void {
    const row=this.backend.complaints()[0];
    this.consume(this.api.putComplaint(row?.id??201));
  }
  doDelete():void {
    const row=this.backend.complaints().at(-1);
    if(!row){this.apiOutput.set('Nothing left to delete. Use POST first.');return;}
    this.consume(this.api.deleteComplaint(row.id));
  }
  doFailure(status:401|403|500):void {
    const map={401:'unauthorized',403:'fail',500:'server-error'} as const;
    this.consume(this.api.getFailure(map[status]));
  }
  doRetry():void {
    // retry(2) means 1 initial attempt + up to 2 additional subscriptions.
    this.consume(this.api.getTransient().pipe(retry(2)));
  }
  doEmployees():void {this.consume(this.api.getEmployees());}
  doTransfer():void {this.consume(this.api.transferMock());}

  runApiLab():void {
    const topic=this.topic()?.id;
    const lab=this.labNumber();
    if(topic==='http-interceptors'){
      if(lab===10)this.doFailure(401);
      else if(lab===11)this.doFailure(403);
      else if(lab===12||lab===9)this.doFailure(500);
      else if(lab===14)this.doRetry();
      else if(lab===17)this.doTransfer();
      else this.doGet();
      return;
    }
    if(lab===4||lab===9)this.doPost();
    else if(lab===5)this.doPut();
    else if(lab===6)this.doDelete();
    else if(lab===11)this.doFailure(403);
    else if(lab===14)this.doEmployees();
    else if(lab===15)this.doTransfer();
    else this.doGet();
  }

  /** Each RxJS lab chooses a distinct real operator pipeline. */
  runRxLab():void {
    const lab=this.labNumber();
    const input$=of(1,2,3,4,5);
    let result$:Observable<unknown>=input$;
    if(lab===4)result$=input$.pipe(take(3));
    if(lab===5)result$=input$.pipe(map(value=>value*10));
    if(lab===6)result$=input$.pipe(filter(value=>value>3));
    if(lab===7)result$=input$.pipe(tap(value=>this.rxOutput.update(a=>[...a,'tap: '+value])));
    if(lab===8)result$=input$.pipe(filter(v=>v>2),map(v=>v*10));
    if(lab===9||lab===11)result$=of('water','Water','lift').pipe(
      debounceTime(15),distinctUntilChanged(),
      switchMap(search=>of('latest matching query: '+search))
    );
    if(lab===10)result$=from(['repair','inspection']).pipe(
      mergeMap(job=>of('Concurrent job: '+job))
    );
    if(lab===12)result$=from(['Nia','Sam']).pipe(map(name=>'Employee '+name));
    if(lab===13)result$=from([120,15000,9000,20000]).pipe(filter(amount=>amount>10000));
    this.rxOutput.set([]);
    this.subscriptionCount.update(n=>n+1);
    result$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:value=>this.rxOutput.update(list=>[...list,String(value)]),
      error:err=>this.rxOutput.update(list=>[...list,'Error '+String(err)]),
      complete:()=>this.rxOutput.update(list=>[...list,'Completed'])
    });
  }

  runObservableLab():void {
    const lab=this.labNumber();
    this.rxOutput.set([]);
    this.subscriptionCount.update(n=>n+1);
    if(lab>=8&&lab<=10||lab===16){
      this.notification$.next('Complaint created #' + this.subscriptionCount());
      this.rxOutput.set(['Subject.next() emitted to two live subscribers']);
      return;
    }
    if(lab===11||lab===14||lab===15){
      this.latestUser$.next('Nia #'+this.subscriptionCount());
      this.rxOutput.set(['BehaviorSubject current value: '+this.latestUser$.getValue()]);
      return;
    }
    if(lab===12){
      const replay=new ReplaySubject<number>(3);
      [1,2,3].forEach(v=>replay.next(v));
      replay.subscribe(v=>this.rxOutput.update(a=>[...a,'Late subscriber replayed '+v]));
      replay.complete();return;
    }
    if(lab===13){
      const asyncResult=new AsyncSubject<number>();
      [1,2,3].forEach(v=>asyncResult.next(v));
      asyncResult.subscribe(v=>this.rxOutput.update(a=>[...a,'Final value '+v]));
      asyncResult.complete();return;
    }
    const cold$=new Observable<number>(subscriber=>{
      [1,2,3].forEach(v=>subscriber.next(v));
      subscriber.complete();
    });
    const output=(prefix:string)=>cold$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({next:v=>this.rxOutput.update(xs=>[...xs,prefix+v]),
        complete:()=>this.rxOutput.update(xs=>[...xs,prefix+'Completed'])});
    output('Observer A: ');
    if(lab===7)output('Observer B (cold re-execution): ');
  }

  updateCity():void {this.user.update(value=>({...value,city:'Jaipur'}));}

  runSignalLab():void {
    switch(this.labNumber()){
      case 4:this.count.set(10);break;
      case 7:this.user.set({...this.user(),name:'Nia'});break;
      case 8:case 9:this.user.update(value=>({...value,city:'Jaipur'}));break;
      case 10:case 11:case 12:this.signalList.update(list=>[...list,this.sampleTitle()]);break;
      case 13:this.employees.update(n=>n+1);break;
      case 14:this.signalLoggedIn.update(v=>!v);break;
      default:this.count.update(n=>n+1);
    }
  }
  runComputedLab():void {
    const lab=this.labNumber();
    if(lab===9||lab===10)this.firstName.set(this.firstName()==='Aarav'?'Nia':'Aarav');
    else if(lab>=11&&lab<=13||lab===18)this.closed.update(n=>Math.min(this.count(),n+1));
    else if(lab===14)this.activeEmployees.update(n=>Math.max(0,n-1));
    else if(lab===15)this.mockWithdrawal.update(n=>n+100);
    else if(lab===17)this.price.update(n=>n+50);
    else this.quantity.update(n=>n+1);
  }
  runEffectLab():void {
    const lab=this.labNumber();
    if(lab===5||lab===6)this.firstName.set(this.firstName()==='Aarav'?'Nia':'Aarav');
    if(lab===8||lab===9)this.theme.set(this.theme()==='light'?'dark':'light');
    else if(lab===10||lab===11||lab===13)this.store.addComplaint(this.sampleTitle());
    else if(lab===14)this.effectCount.set(11);
    else this.effectCount.update(n=>n+1);
  }
  runStateLab():void {
    const lab=this.labNumber();
    if(lab===7)this.store.loggedIn.update(v=>!v);
    else if(lab===2||lab===3||lab===4)this.store.updateUser(this.newUser());
    else if(lab===5||lab===8||lab===9)this.store.addComplaint(this.sampleTitle());
    else if(lab===6)this.employees.update(n=>n+1);
    else if(lab===10){this.store.loading.set(true);this.api.getComplaints().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:items=>this.store.setComplaints(items),
      error:()=>{this.store.loading.set(false);this.store.error.set('Training request failed');}
    });}
    else this.store.updateUser(this.newUser());
  }
  resetDemo():void {
    this.backend.reset();this.trace.clear();this.store.reset();
    this.apiOutput.set('Reset complete. Select a request.');
    this.rxOutput.set([]);this.notifications.set([]);
    this.subscriptionCount.set(0);this.count.set(5);
    this.closed.set(2);this.price.set(200);this.quantity.set(3);
    this.user.set({name:'Aarav',city:'Gurugram'});
    this.signalList.set(['Water issue','Lift issue']);this.signalLoggedIn.set(false);
    this.firstName.set('Aarav');this.lastName.set('Sharma');
    this.employees.set(5);this.activeEmployees.set(3);
    this.mockBalance.set(5000);this.mockWithdrawal.set(500);
    this.theme.set('light');this.effectCount.set(0);
  }
}

