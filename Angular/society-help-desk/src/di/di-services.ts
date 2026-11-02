import { Injectable, InjectionToken, signal } from '@angular/core';

/** Chapter 05: shared in-memory business service; NO real API or persistence. */
export interface Complaint { readonly id:number; readonly title:string; readonly status:'Open'|'Resolved'; }
@Injectable({providedIn:'root'})
export class ComplaintService {
  private readonly records = signal<readonly Complaint[]>([
    {id:101,title:'Lift repair - Block A',status:'Open'},
    {id:102,title:'Water supply - Block B',status:'Open'}
  ]);
  readonly complaints = this.records.asReadonly();
  readonly calls = signal(0);
  private nextId=103;
  getComplaints():readonly Complaint[] {
    this.calls.update(n=>n+1);
    return this.records();
  }
  createComplaint(title:string):void {
    const name=title.trim();
    if(!name)return;
    this.records.update(items=>[...items,{id:this.nextId++,title:name,status:'Open'}]);
  }
  updateComplaint(id:number):void {
    this.records.update(items=>items.map(item=>
      item.id===id?{...item,status:item.status==='Open'?'Resolved':'Open'}:item));
  }
  deleteComplaint(id:number):void {
    this.records.update(items=>items.filter(item=>item.id!==id));
  }
  reset():void {
    this.nextId=103;
    this.records.set([
      {id:101,title:'Lift repair - Block A',status:'Open'},
      {id:102,title:'Water supply - Block B',status:'Open'}
    ]);
    this.calls.set(0);
  }
}
@Injectable({providedIn:'root'})
export class EmployeeService {
  readonly people=signal<readonly string[]>(['Nia - Technician','Raj - Security']);
  add(name:string):void {
    const v=name.trim();
    if(v)this.people.update(xs=>[...xs,v]);
  }
  delete(index:number):void {
    this.people.update(xs=>xs.filter((_,i)=>i!==index));
  }
}
@Injectable({providedIn:'root'})
export class UserService {
  readonly userName=signal('Aarav');
  changeUser(value:string):void {this.userName.set(value.trim()||'Guest');}
}
/** A mock balance — never real funds or payment functionality. */
@Injectable({providedIn:'root'})
export class AccountService {
  readonly balance=signal(1000);
  transferDemo(amount:number):void {
    if(Number.isFinite(amount)&&amount>0&&amount<=this.balance())
      this.balance.update(value=>value-amount);
  }
}

let serial=0;
@Injectable({providedIn:'root'})
export class SharedCounterService {
  readonly identity='root-'+(++serial);
  readonly count=signal(0);
  increment():void {this.count.update(n=>n+1);}
}
@Injectable()
export class ScopedCounterService {
  readonly identity='component-'+(++serial);
  readonly count=signal(0);
  increment():void {this.count.update(n=>n+1);}
}

export interface TrainingConfig {readonly application:string;readonly environment:string;}
export const TRAINING_CONFIG=new InjectionToken<TrainingConfig>('CH05_TRAINING_CONFIG',{
  providedIn:'root',factory:()=>({application:'Society Help Desk',environment:'local demo'})
});
export const API_URL=new InjectionToken<string>('CH05_API_URL',{
  providedIn:'root',factory:()=> 'https://example.invalid/complaints'
});
export const SCOPE_LABEL=new InjectionToken<string>('CH05_SCOPE_LABEL',{
  providedIn:'root',factory:()=> 'Application root injector'
});

/** Different provider recipes are registered in the DiExecution component. */
export abstract class NotificationPort { abstract send(message:string):string; }
@Injectable()
export class LocalNotification implements NotificationPort {
  send(message:string):string{return 'Local notice: '+message;}
}
export const COMPLAINT_ALIAS=new InjectionToken<ComplaintService>('CH05_COMPLAINT_ALIAS');
export const DISPLAY_HEADING=new InjectionToken<string>('CH05_DISPLAY_HEADING');

