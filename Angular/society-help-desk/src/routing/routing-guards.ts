import { Injectable, inject, signal } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, Router } from '@angular/router';
import { RoutingEditor } from './routing-pages';

/** UI-only training flags are NOT authentication or backend authorization. */
@Injectable({providedIn:'root'})
export class RoutingTrainingSession {
  readonly signedIn=signal(false);
  readonly role=signal<'resident'|'admin'>('resident');
  readonly attempts=signal(0);
  login():void {this.signedIn.set(true);}
  logout():void {this.signedIn.set(false);this.role.set('resident');}
  makeAdmin():void {this.role.set('admin');}
  reset():void {this.logout();this.attempts.set(0);}
}
function denied(reason:string){
  return inject(Router).createUrlTree(['/routing-lab/denied'],{queryParams:{reason}});
}
export const trainingAuthGuard:CanActivateFn=()=>{
  const session=inject(RoutingTrainingSession);
  session.attempts.update(n=>n+1);
  return session.signedIn() || denied('Sign in for this demo route');
};
export const trainingAdminMatch:CanMatchFn=()=>{
  const session=inject(RoutingTrainingSession);
  session.attempts.update(n=>n+1);
  return (session.signedIn()&&session.role()==='admin') ||
    denied('Admin role is required for this demo route');
};
export const trainingChildGuard:CanActivateChildFn=()=>{
  const session=inject(RoutingTrainingSession);
  return session.signedIn() || denied('Protected child route: sign in first');
};
/** Real CanDeactivateFn; native confirmation is used only on attempted navigation. */
export const trainingUnsavedGuard:CanDeactivateFn<RoutingEditor>=component=>
  !component.isDirty() || window.confirm('Discard unsaved fictional changes?');
