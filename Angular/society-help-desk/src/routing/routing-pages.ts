import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

/** Route maps are Observables; toSignal tracks reuse across parameter changes. */
@Component({standalone:true,imports:[RouterLink],templateUrl:'./routing-params.html'})
export class RoutingParameterViewer {
 readonly route=inject(ActivatedRoute);
 readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
 readonly query=toSignal(this.route.queryParamMap,{initialValue:this.route.snapshot.queryParamMap});
 readonly fragment=toSignal(this.route.fragment,{initialValue:this.route.snapshot.fragment});
 readonly firstSnapshot=signal(this.route.snapshot.paramMap.get('id')??this.route.snapshot.paramMap.get('empId')??'');
}
@Component({standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],templateUrl:'./routing-portal.html'})
export class RoutingPortal {}
@Component({standalone:true,imports:[RouterOutlet,RouterLink],templateUrl:'./routing-reports.html'})
export class RoutingReports {}
@Component({standalone:true,templateUrl:'./routing-child.html'})
export class RoutingChildContent {readonly route=inject(ActivatedRoute);}
@Component({standalone:true,imports:[RouterLink],templateUrl:'./routing-protected.html'})
export class RoutingProtected {}
@Component({standalone:true,imports:[RouterLink],templateUrl:'./routing-denied.html'})
export class RoutingDenied {readonly route=inject(ActivatedRoute);}
@Component({standalone:true,imports:[RouterLink],templateUrl:'./routing-editor.html'})
export class RoutingEditor {
 readonly note=signal('Lift maintenance'); readonly dirty=signal(false);
 isDirty():boolean{return this.dirty();}
 changeNote(e:Event):void{this.note.set((e.target as HTMLInputElement).value);this.dirty.set(true);}
 save():void{this.dirty.set(false);}
}
