import { RoutingParameterViewer, RoutingPortal, RoutingReports, RoutingChildContent, RoutingProtected, RoutingDenied, RoutingEditor } from './routing/routing-pages';
import { trainingAuthGuard, trainingAdminMatch, trainingChildGuard, trainingUnsavedGuard } from './routing/routing-guards';
import { Chapter06Execution } from './api/training-execution';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { trainingAuthInterceptor, trainingLogInterceptor, trainingErrorInterceptor, mockBackendInterceptor } from './api/training-api';
import { DiExecution } from './di/di-execution';
import { FormsExecution } from './forms/forms-lab';
import { CourseChapters, CourseTopics, CourseSubtopics } from './lab/course-pages';
import { LabHome, LabCategory } from './lab/lab-pages';
import { LabDemo } from './lab/lab-demo';
import {bootstrapApplication} from '@angular/platform-browser';
import {Component,Injectable,computed,inject,signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms';
import {provideRouter,RouterLink,RouterOutlet,Routes,Router,CanMatchFn} from '@angular/router';
type Status='Open'|'In Progress'|'Resolved';
type Priority='Low'|'Medium'|'High';
interface Complaint{id:string;title:string;description:string;resident:string;status:Status;priority:Priority;createdAt:string}
const sample:Complaint[]=[
{id:'SHD-101',title:'Water leakage in Block A',description:'Sample water leak in corridor.',resident:'Demo Resident',status:'Open',priority:'High',createdAt:'2026-10-22'},
{id:'SHD-102',title:'Lift not working',description:'Sample lift maintenance request.',resident:'Demo Resident',status:'In Progress',priority:'High',createdAt:'2026-10-21'},
{id:'SHD-103',title:'Lobby cleaning',description:'Sample cleaning issue completed.',resident:'Demo Resident',status:'Resolved',priority:'Low',createdAt:'2026-10-20'}];
@Injectable({providedIn:'root'})class ComplaintStore{
 private load():Complaint[]{try{const raw=localStorage.getItem('shd-demo');return raw?JSON.parse(raw) as Complaint[]:sample;}catch{return sample;}}
 private state=signal<Complaint[]>(this.load());readonly complaints=this.state.asReadonly();
 readonly open=computed(()=>this.state().filter(x=>x.status==='Open').length);
 readonly resolved=computed(()=>this.state().filter(x=>x.status==='Resolved').length);
 update(id:string,status:Status){this.persist(this.state().map(x=>x.id===id?{...x,status}:x));}
 add(data:Pick<Complaint,'title'|'description'|'resident'|'priority'>){this.persist([{...data,id:'SHD-'+Date.now(),status:'Open',createdAt:new Date().toISOString()},...this.state()]);}
 private persist(v:Complaint[]){this.state.set(v);try{localStorage.setItem('shd-demo',JSON.stringify(v))}catch{}}
}
@Component({standalone:true,imports:[CommonModule,RouterLink],template:`<h1>Complaints dashboard</h1><p>Manage requests in a local training app.</p><a routerLink="/new">+ New complaint</a><div class="stats"><div>Total: {{store.complaints().length}}</div><div>Open: {{store.open()}}</div><div>Resolved: {{store.resolved()}}</div></div><label>Search: <input aria-label="Search" [value]="search()" (input)="search.set($any($event.target).value)"></label><label>Status: <select aria-label="Status" [value]="filter()" (change)="filter.set($any($event.target).value)"><option>All</option><option>Open</option><option>In Progress</option><option>Resolved</option></select></label><div class="cards">@for(c of filtered();track c.id){<article><small>{{c.id}} · {{c.createdAt|date:'mediumDate'}}</small><h2>{{c.title}}</h2><p>{{c.description}}</p><p>{{c.resident}} · {{c.priority}} priority</p><label>Update status: <select [value]="c.status" (change)="change(c.id,$event)"><option>Open</option><option>In Progress</option><option>Resolved</option></select></label></article>}@empty{<p>No matching complaints.</p>}</div>`,styles:[`.stats,.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1rem;margin:1.5rem 0}.stats div,article{padding:1rem;background:#fff;border:1px solid #dae1eb;border-radius:12px}article h2{font-size:1.1rem}`]})class Dashboard{
 readonly store=inject(ComplaintStore);readonly search=signal('');readonly filter=signal('All');
 readonly filtered=computed(()=>{const q=this.search().toLowerCase(),f=this.filter();return this.store.complaints().filter(c=>(f==='All'||c.status===f)&&[c.title,c.description,c.resident].some(t=>t.toLowerCase().includes(q)));});
 change(id:string,e:Event){this.store.update(id,(e.target as HTMLSelectElement).value as Status);}
}
@Component({standalone:true,imports:[ReactiveFormsModule,RouterLink],template:`<a routerLink="/dashboard">← Dashboard</a><h1>New complaint</h1><form [formGroup]="form" (ngSubmit)="submit()"><label>Resident name <input formControlName="resident"></label>@if(form.controls.resident.touched&&form.controls.resident.invalid){<p class="error">Enter at least 2 characters.</p>}<label>Title <input formControlName="title"></label>@if(form.controls.title.touched&&form.controls.title.invalid){<p class="error">Enter at least 5 characters.</p>}<label>Description <textarea rows="4" formControlName="description"></textarea></label>@if(form.controls.description.touched&&form.controls.description.invalid){<p class="error">Enter at least 10 characters.</p>}<label>Priority <select formControlName="priority"><option>Low</option><option>Medium</option><option>High</option></select></label><button type="submit">Submit complaint</button></form>`,styles:[`form{display:flex;flex-direction:column;gap:1rem;max-width:600px;background:white;padding:2rem;border-radius:12px}label{display:flex;flex-direction:column;gap:.5rem}.error{color:#b91c1c;margin:0}`]})class NewComplaint{
 private fb=inject(FormBuilder);private store=inject(ComplaintStore);private router=inject(Router);
 readonly form=this.fb.nonNullable.group({resident:['',[Validators.required,Validators.minLength(2)]],title:['',[Validators.required,Validators.minLength(5)]],description:['',[Validators.required,Validators.minLength(10)]],priority:this.fb.nonNullable.control<Priority>('Medium')});
 submit(){this.form.markAllAsTouched();if(this.form.invalid)return;this.store.add(this.form.getRawValue());void this.router.navigateByUrl('/dashboard');}
}
@Component({standalone:true,template:`<h1>About</h1><p>Society Help Desk is an educational demo. Complaints are stored in this browser using localStorage. No server, login or real dispatch is provided. Use sample data only.</p>`})class About{}
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterOutlet],template:`<header><strong>Society Help Desk</strong><nav><a routerLink="/chapters">Chapters</a> · <a routerLink="/chapters/03">Chapter 03 Labs</a> · <a routerLink="/chapters/04">Chapter 04 Forms</a> · <a routerLink="/chapters/05">Chapter 05 DI</a> · <a routerLink="/chapters/06">Chapter 06 API/RxJS</a> · <a routerLink="/chapters/07">Chapter 07 Routing</a> · <a routerLink="/lab">Legacy Lab</a> · <a routerLink="/dashboard">Dashboard</a> · <a routerLink="/new">New Complaint</a> · <a routerLink="/about">About</a></nav></header><main><router-outlet/></main><footer>Angular portfolio learning project · Local data only</footer>`,styles:[`header{background:white;padding:1.4rem;display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;border-bottom:1px solid #e2e8f0}main{max-width:1100px;margin:2rem auto;padding:0 1rem;min-height:65vh}footer{text-align:center;color:#64748b;padding:2rem}`]})class App{}
// Canonical UI: Chapters -> Topics -> Subtopics -> Execution. Existing lab links remain.
// URL segments are: ['chapters', '<chapter>', '<topic>', '<lab>'].
// Chapter 04 cannot be handled by the generic Chapter 03 execution screen.
const nonFormsExecution: CanMatchFn = (_route, segments) =>
  segments[1]?.path !== '04' && segments[1]?.path !== '05' && segments[1]?.path !== '06' && segments[1]?.path !== '07';

const routes:Routes=[
  // Strict four-level curriculum: Chapters → Topics → Subtopics → Execution.
  {path:'',redirectTo:'chapters',pathMatch:'full'},
  {path:'chapters',component:CourseChapters},
  // Chapter 04 live forms must always resolve to FormsExecution.
  // Defensive canMatch on the generic route prevents the old reading-only
  // component from displaying "not implemented" for Chapter 04.
  {path:'chapters/04/:topic/:subtopic',component:FormsExecution},
  // Dedicated Chapter 05 route: never use Chapter 03 reading fallback for DI labs.
  {path:'chapters/05/:topic/:subtopic',component:DiExecution},
  // Real Chapter 06 HttpClient/RxJS/Signals execution; never fall back to reading screen.
  {path:'chapters/06/:topic/:subtopic',component:Chapter06Execution},
  // Chapter 07 itself loads on demand and NEVER falls into generic reading details.
  {path:'chapters/07/:topic/:subtopic',loadComponent:()=>import('./routing/routing-execution').then(m=>m.RoutingExecution)},
  // Chapter 07 actual router demonstrations, named separately to preserve earlier modules.
  {path:'routing-lab/denied',component:RoutingDenied},
  {path:'routing-lab/employee/:id',component:RoutingParameterViewer},
  {path:'routing-lab/complaint/:id',component:RoutingParameterViewer},
  {path:'routing-lab/product/:id',component:RoutingParameterViewer},
  {path:'routing-lab/transaction/:id',component:RoutingParameterViewer},
  {path:'routing-lab/department/:deptId/employee/:empId',component:RoutingParameterViewer},
  {path:'routing-lab/people',component:RoutingParameterViewer},
  {path:'routing-lab/portal',component:RoutingPortal,children:[
    {path:'',redirectTo:'complaints',pathMatch:'full'},
    {path:'complaints',component:RoutingChildContent,data:{title:'Complaints'}},
    {path:'complaints/:id',component:RoutingChildContent,data:{title:'Complaint details'}},
    {path:'residents',component:RoutingChildContent,data:{title:'Residents'}},
    {path:'settings',component:RoutingChildContent,data:{title:'Settings'}},
    {path:'reports',component:RoutingReports,children:[
      {path:'',component:RoutingChildContent,data:{title:'Reports overview'}},
      {path:'monthly',component:RoutingChildContent,data:{title:'Monthly report'}}
    ]}
  ]},
  {path:'routing-lab/protected',component:RoutingProtected,canActivate:[trainingAuthGuard]},
  {path:'routing-lab/admin',component:RoutingProtected,canMatch:[trainingAdminMatch]},
  {path:'routing-lab/private',component:RoutingPortal,canActivateChild:[trainingChildGuard],children:[
    {path:'',redirectTo:'reports',pathMatch:'full'},
    {path:'reports',component:RoutingChildContent,data:{title:'Protected child reports'}}
  ]},
  {path:'routing-lab/editor',component:RoutingEditor,canDeactivate:[trainingUnsavedGuard]},
  {path:'routing-lab/lazy-report',loadComponent:()=>import('./routing/routing-lazy-report').then(m=>m.RoutingLazyReport)},
  {path:'routing-lab/lazy-feature',loadChildren:()=>import('./routing/routing-lazy.routes').then(m=>m.routingLazyRoutes)},
  {path:'chapters/:chapter/:topic/:subtopic',component:LabDemo,canMatch:[nonFormsExecution]},
  {path:'chapters/:chapter/:topic',component:CourseSubtopics},
  {path:'chapters/:chapter',component:CourseTopics},

  // Preserve old /lab links and the complete existing Society Help Desk app.
  {path:'lab',component:LabHome},
  {path:'lab/:category/:topic',component:LabDemo},
  {path:'lab/:category',component:LabCategory},
  {path:'dashboard',component:Dashboard},
  {path:'new',component:NewComplaint},
  {path:'about',component:About},
  {path:'**',redirectTo:'chapters'}
];
bootstrapApplication(App,{providers:[
  provideRouter(routes),
  // Interceptors run in declared order. The last one handles only /api/training locally.
  provideHttpClient(withInterceptors([
    trainingAuthInterceptor,trainingLogInterceptor,trainingErrorInterceptor,mockBackendInterceptor
  ]))
]}).catch(console.error);
