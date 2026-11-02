import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { TrainingComplaint } from './training-api';

/** Reactive single source of truth for Chapter 06 examples. No persistence. */
@Injectable({providedIn:'root'})
export class TrainingStore {
  private readonly rows=signal<readonly TrainingComplaint[]>([]);
  readonly complaints=this.rows.asReadonly();
  readonly loading=signal(false);
  readonly error=signal('');
  readonly currentUser=signal('Aarav');
  readonly loggedIn=signal(false); // UI flag only; not authentication
  readonly filter=signal<'All'|'Open'|'Resolved'>('All');
  readonly total=computed(()=>this.rows().length);
  readonly open=computed(()=>this.rows().filter(c=>c.status==='Open').length);
  readonly resolved=computed(()=>this.rows().filter(c=>c.status==='Resolved').length);
  readonly visible=computed(()=>this.rows().filter(c=>this.filter()==='All'||c.status===this.filter()));
  readonly completion=computed(()=>this.total()?Math.round(this.resolved()*100/this.total()):0);
  readonly userStream=new BehaviorSubject<string>('Aarav');

  setComplaints(values:readonly TrainingComplaint[]):void {
    this.rows.set([...values]);this.loading.set(false);this.error.set('');
  }
  addComplaint(title:string):void {
    const max=Math.max(300,...this.rows().map(x=>x.id));
    this.rows.update(rows=>[...rows,{id:max+1,title,status:'Open'}]);
  }
  updateUser(user:string):void {
    this.currentUser.set(user.trim()||'Guest');
    this.userStream.next(this.currentUser());
  }
  reset():void {
    this.rows.set([]);this.loading.set(false);this.error.set('');
    this.currentUser.set('Aarav');this.userStream.next('Aarav');
    this.loggedIn.set(false);this.filter.set('All');
  }
}

