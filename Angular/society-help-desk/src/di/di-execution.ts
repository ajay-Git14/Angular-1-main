import { Component, computed, inject, Injector, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { chapterTopicById, courseSubtopicById } from '../lab/course-catalog';
import { CH05_NOTES, type Ch05Note } from './di-notes';
import {
  AccountService, API_URL, COMPLAINT_ALIAS, ComplaintService,
  DISPLAY_HEADING, EmployeeService, LocalNotification, NotificationPort,
  SharedCounterService, TRAINING_CONFIG, UserService
} from './di-services';
import { DiScopePanel } from './di-scope-panel';

class ManuallyCreatedHelper {
  readonly greeting='Manual helper created with new (not Angular-managed).';
}

/**
 * Chapter 05: actual Angular dependency injection, not a simulated injector.
 * - root services use @Injectable({ providedIn:'root' })
 * - the component uses constructor injection, inject(), Injector.get()
 * - provider recipes include useClass, useExisting and useFactory
 * - a typed InjectionToken demonstrates non-class dependencies
 * - child panel has a component-scoped service and overridden token
 */
@Component({
  standalone:true,
  imports:[RouterLink,DiScopePanel],
  templateUrl:'./di-execution.html',
  styleUrl:'./di-execution.css',
  providers:[
    {provide:COMPLAINT_ALIAS,useExisting:ComplaintService},
    {provide:NotificationPort,useClass:LocalNotification},
    {provide:DISPLAY_HEADING,useFactory:()=>{
      return inject(TRAINING_CONFIG).application + ' / Injection Demo';
    }}
  ]
})
export class DiExecution {
  // Constructor injection is deliberately shown next to inject().
  constructor(readonly constructorService:ComplaintService) {}
  private readonly route=inject(ActivatedRoute);
  private readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
  readonly topic=computed(()=>chapterTopicById('05',this.params().get('topic')));
  readonly subtopic=computed(()=>courseSubtopicById('05',this.params().get('topic'),this.params().get('subtopic')));
  readonly labNumber=computed(()=>Number(this.subtopic()?.id.match(/lab-(\d+)/)?.[1]??1));
  readonly note=computed<Ch05Note|undefined>(()=>CH05_NOTES[this.topic()?.id??'']?.[this.subtopic()?.id??'']);
  readonly complaints=inject(ComplaintService);
  readonly employees=inject(EmployeeService);
  readonly users=inject(UserService);
  readonly account=inject(AccountService);
  readonly shared=inject(SharedCounterService);
  readonly injector=inject(Injector);
  readonly alias=inject(COMPLAINT_ALIAS);
  readonly notifier=inject(NotificationPort);
  readonly config=inject(TRAINING_CONFIG);
  readonly apiUrl=inject(API_URL);
  readonly heading=inject(DISPLAY_HEADING);
  get sameByConstructor():boolean {return this.complaints===this.constructorService;}
  readonly sameByInjector=this.complaints===this.injector.get(ComplaintService);
  readonly sameByAlias=this.complaints===this.alias;

  readonly serviceOutput=signal('Change a control to observe an injected service.');
  readonly complaintTitle=signal('Water pressure - Block C');
  readonly employeeName=signal('Sam - Maintenance');
  readonly userName=signal('Nia');
  readonly amount=signal(100);
  readonly manuallyCreated=signal(0);
  readonly manualMessage=signal('');

  readValue(event:Event):string {
    return (event.target as HTMLInputElement).value;
  }
  readAmount(event:Event):number {
    return Number((event.target as HTMLInputElement).value);
  }

  manuallyCreate():void {
    const helper=new ManuallyCreatedHelper();
    this.manuallyCreated.update(x=>x+1);
    this.manualMessage.set(helper.greeting);
  }
  loadComplaints():void {
    const list=this.complaints.getComplaints();
    this.serviceOutput.set('Injected service returned '+list.length+' complaint(s).');
  }
  createComplaint():void {
    this.complaints.createComplaint(this.complaintTitle());
    this.serviceOutput.set('Complaint created by the root-injected ComplaintService.');
  }
  toggleComplaint(id:number):void {
    this.complaints.updateComplaint(id);
    this.serviceOutput.set('Complaint status updated in the injected service.');
  }
  deleteComplaint(id:number):void {
    this.complaints.deleteComplaint(id);
    this.serviceOutput.set('Complaint removed from the in-memory root service.');
  }
  addEmployee():void {
    this.employees.add(this.employeeName());
    this.serviceOutput.set('Employee record added by EmployeeService.');
  }
  deleteEmployee(index:number):void {
    this.employees.delete(index);
    this.serviceOutput.set('Employee removed by EmployeeService.');
  }
  changeUser():void {
    this.users.changeUser(this.userName());
    this.serviceOutput.set('UserService updated; both sample consumers see the same user.');
  }
  transfer():void {
    const old=this.account.balance();
    this.account.transferDemo(this.amount());
    this.serviceOutput.set(old!==this.account.balance()
      ? 'Mock transfer applied locally. No banking transaction occurred.'
      : 'Mock transfer rejected (amount must be positive and within the balance).');
  }
  sendNotice():void {
    this.serviceOutput.set(this.notifier.send('Maintenance team assigned'));
  }
  simulateApi():void {
    this.serviceOutput.set('Mock gateway configured at '+this.apiUrl+
      '. No HTTP request is sent; API integration is taught in Chapter 06.');
  }
  useAllServices():void {
    const rows=this.complaints.getComplaints().length;
    this.serviceOutput.set(this.users.userName()+' can see '+rows+' complaint(s), '+
      this.employees.people().length+' employees and a mock balance of '+this.account.balance()+'.');
  }
  reset():void {
    this.complaints.reset();
    this.users.changeUser('Aarav');
    this.serviceOutput.set('In-memory complaint list reset. Component-local counters reset on recreation only.');
    this.manuallyCreated.set(0);
    this.manualMessage.set('');
    this.complaintTitle.set('Water pressure - Block C');
    this.employeeName.set('Sam - Maintenance');
    this.userName.set('Nia');
    this.amount.set(100);
  }
}

