import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { chapterTopicById, courseSubtopicById } from '../lab/course-catalog';
import { CH07_NOTES, type Ch07Note } from './routing-notes';
import { RoutingTrainingSession } from './routing-guards';

/**
 * The fourth-level Chapter 07 learning screen: five genuine Angular Router
 * topic engines. It never reuses the Chapter 03 reading-only implementation.
 */
@Component({
 standalone:true,
 imports:[RouterLink,RouterLinkActive],
 templateUrl:'./routing-execution.html',
})
export class RoutingExecution {
 private readonly route=inject(ActivatedRoute);
 readonly router=inject(Router);
 readonly session=inject(RoutingTrainingSession);
 private readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
 readonly topic=computed(()=>chapterTopicById('07',this.params().get('topic')));
 readonly lesson=computed(()=>courseSubtopicById('07',this.params().get('topic'),this.params().get('subtopic')));
 readonly labNumber=computed(()=>Number(this.lesson()?.id.match(/^lab-(\d+)/)?.[1]??1));
 readonly note=computed<Ch07Note|undefined>(()=>CH07_NOTES[this.topic()?.id??'']?.[this.lesson()?.id??'']);
 readonly lastRoute=signal(this.router.url);
 readonly transitions=signal<readonly string[]>([]);
 readonly userId=signal(101);
 readonly page=signal(1);
 readonly status=signal<'Open'|'Resolved'>('Open');
 readonly navMessage=signal('Choose a demonstration to navigate using Angular Router.');

 constructor() {
  this.router.events.pipe(
   filter((event):event is NavigationEnd=>event instanceof NavigationEnd),
   takeUntilDestroyed()
  ).subscribe(event=>{
   this.lastRoute.set(event.urlAfterRedirects);
   this.transitions.update(old=>[event.urlAfterRedirects,...old].slice(0,5));
  });
 }
 readNumber(event:Event):number {
  const x=Number((event.target as HTMLInputElement).value);
  return Number.isInteger(x)&&x>0?x:101;
 }
 navigateTo(parts:readonly (string|number)[],query?:Record<string,string|number>):void {
  this.navMessage.set('Calling Router.navigate() to open an actual routed Angular component...');
  void this.router.navigate([...parts],query?{queryParams:query}:{});
 }
 runSelected():void {
  const id=this.topic()?.id,lab=this.labNumber();
  if(id==='routing-and-navigation'){
   if(lab===7)this.navigateTo(['/']);
   else if(lab===8)this.navigateTo(['/routing-lab/not-a-real-route']);
   else if(lab===9||lab===10)this.navigateTo(['/dashboard']);
   else if(lab===11)this.navigateTo(['/routing-lab/people'],{userId:1});
   else if(lab===12)this.navigateTo(['/routing-lab/portal/reports']);
   else if(lab===14)this.navigateTo(['/routing-lab/portal/residents']);
   else if(lab===15)this.navigateTo(['/routing-lab/portal/settings']);
   else this.navigateTo(['/routing-lab/portal/complaints']);
  } else if(id==='route-parameters'){
   if(lab>=7&&lab<=8)this.navigateTo(['/routing-lab/complaint',5001]);
   else if(lab===9||lab===10)this.navigateTo(['/routing-lab/product',1001]);
   else if(lab===11||lab===12)this.navigateTo(['/routing-lab/department',10,'employee',100]);
   else if(lab>=14&&lab<=17)this.navigateTo(['/routing-lab/people'],{page:this.page(),status:this.status()});
   else if(lab===18)this.navigateTo(['/routing-lab/transaction',50001]);
   else this.navigateTo(['/routing-lab/employee',this.userId()]);
  } else if(id==='child-routes'){
   if(lab===10||lab===14)this.navigateTo(['/routing-lab/portal/reports/monthly']);
   else if(lab===13)this.navigateTo(['/routing-lab/portal/complaints/501']);
   else if(lab===8)this.navigateTo(['/routing-lab/portal/residents']);
   else if(lab===9)this.navigateTo(['/routing-lab/portal/settings']);
   else if(lab===11)this.navigateTo(['/routing-lab/portal']);
   else this.navigateTo(['/routing-lab/portal/complaints']);
  } else if(id==='route-guards'){
   if(lab===9||lab===10)this.navigateTo(['/routing-lab/editor']);
   else if(lab===7||lab===8||lab===12||lab===14)this.navigateTo(['/routing-lab/admin']);
   else if(lab===11)this.navigateTo(['/routing-lab/private/reports']);
   else this.navigateTo(['/routing-lab/protected']);
  } else if(id==='lazy-loading'){
   if(lab===2||lab===12||lab===13)this.navigateTo(['/routing-lab/lazy-report']);
   else this.navigateTo(['/routing-lab/lazy-feature']);
  }
 }
 resetDemo():void {
  this.session.reset();this.userId.set(101);this.page.set(1);this.status.set('Open');
  this.transitions.set([]);this.navMessage.set('Training UI session reset; no backend affected.');
 }
}

