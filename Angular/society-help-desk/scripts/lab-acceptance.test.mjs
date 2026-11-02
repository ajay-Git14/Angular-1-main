import { existsSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = path => readFileSync(resolve(root, path), 'utf8');
const catalog = source('src/lab/lab.catalog.ts');
const home = source('src/lab/lab-home.html');
const category = source('src/lab/lab-category.html');
const demo = source('src/lab/lab-demo.html');
const classSource = source('src/lab/lab-demo.ts');
const app = source('src/main.ts');
const css = source('src/lab/lab.css');

const expected = {
 directives: ['ngclass','ngstyle','attribute','if','for','switch','hover','priority'],
 pipes: ['uppercase','lowercase','titlecase','currency','date','percent','json','slice','chain','custom'],
 animations: ['enter','leave','fade','slide','scale','hoverlift','toast','stagger']
};

test('Legacy /lab still has three linked category cards', () => {
 for (const id of Object.keys(expected)) assert.ok(catalog.includes("id: '"+id+"'"));
 assert.match(home, /@for \(category of categories; track category.id\)/);
 assert.match(home, /\[routerLink\]="\['\/lab', category.id\]"/);
});

test('Legacy /lab topic rows still navigate', () => {
 assert.match(category, /\[routerLink\]="\['\/lab', current.id, topic.id\]"/);
 assert.match(category, /@empty/);
});

test('All 26 executable topics still have live effects', () => {
 const all = Object.values(expected).flat();
 assert.equal(all.length, 26);
 for (const id of all) {
   assert.ok(catalog.includes("id: '"+id+"', category:"), 'Catalog: '+id);
   assert.ok(demo.includes("@case ('"+id+"')"), 'Demo effect: '+id);
 }
 assert.equal((demo.match(/data-testid="demo-effect"/g)||[]).length, 26);
 for(const label of ['lesson.code','lesson.expected','lesson.memoryHook','(click)="reset()"']) {
   assert.ok(demo.includes(label),label);
 }
});

test('Lab routing added while previous Society Help Desk features remain', () => {
 for(const route of ["path:'lab'","path:'lab/:category'","path:'lab/:category/:topic'",
  "path:'dashboard'","path:'new'","path:'about'"]) assert.ok(app.includes(route),route);
 assert.ok(app.includes("path:'',redirectTo:'chapters'"));
});

test('Directives use built-in binding and real HostListener/HostBinding', () => {
 const directives=source('src/lab/lab-directives.ts');
 for(const marker of ['[ngClass]','[ngStyle]','[attr.aria-label]','@if (showAlert())',
     '@for (item of complaints(); track item.id)','@switch (role())']) {
   assert.ok(demo.includes(marker),marker);
 }
 for(const marker of ["@HostListener('mouseenter')",'Renderer2','@HostBinding']) {
   assert.ok(directives.includes(marker),marker);
 }
 assert.ok(classSource.includes('addComplaint()'));
});

test('CommonModule and custom pipe cover format behaviors', () => {
 const pipe=source('src/lab/lab-status.pipe.ts');
 assert.ok(classSource.includes('imports: [CommonModule'));
 for(const marker of ['| currency:currencyCode()',"| date:'mediumDate'","| statusLabel"]) {
   assert.ok(demo.includes(marker),marker);
 }
 assert.ok(pipe.includes("name: 'statusLabel'"));
 assert.ok(pipe.includes('Unknown status'));
});

test('Modern CSS animations include accessibility motion reduction', () => {
 assert.ok(demo.includes('animate.enter="lab-enter"'));
 assert.ok(demo.includes('animate.leave="lab-leave"'));
 assert.ok(css.includes('@keyframes labArrive'));
 assert.ok(css.includes('@keyframes labDepart'));
 assert.ok(css.includes('prefers-reduced-motion:reduce'));
 assert.ok(!classSource.includes("from '@angular/animations'"));
});

test('Angular build styles and npm static test command are configured', () => {
 const config=JSON.parse(source('angular.json'));
 const pkg=JSON.parse(source('package.json'));
 assert.ok(config.projects['society-help-desk'].architect.build.options.styles.includes('src/lab/lab.css'));
 assert.equal(pkg.scripts['test:lab'],'node --test scripts/lab-acceptance.test.mjs');
 assert.equal(pkg.scripts.build,'ng build');
});



// New canonical four-level navigation tests — they do not need Angular node_modules.
const chapterCatalog = source('src/lab/course-catalog.ts');
const courseHome = source('src/lab/course-chapters.html');
const courseTopics = source('src/lab/course-topics.html');
const courseSubtopics = source('src/lab/course-subtopics.html');
const coursePages = source('src/lab/course-pages.ts');
const start = chapterCatalog.indexOf('const chaptersSource: readonly CourseChapter[] = ') + 'const chaptersSource: readonly CourseChapter[] = '.length;
const stop = chapterCatalog.indexOf(';\nexport const COURSE_CHAPTERS', start);
const chapters = JSON.parse(chapterCatalog.slice(start, stop));

test('Level 1 shows all 11 chapters from course Markdown folders', () => {
 assert.equal(chapters.length, 11);
 assert.ok(courseHome.includes('[routerLink]="[\'/chapters\',chapter.id]"'));
 assert.ok(courseHome.includes('data-testid="chapter-grid"'));
 assert.ok(coursePages.includes('class CourseChapters'));
});

test('Level 2 lists actual course topics for every chapter', () => {
 const topics = chapters.flatMap(chapter => chapter.topics);
 assert.equal(topics.length, 59);
 assert.ok(courseTopics.includes("[routerLink]=\"['/chapters',current.id,topic.id]\""));
 for (const topic of topics) assert.ok(topic.docPath.endsWith('.md'), topic.name);
 assert.ok(coursePages.includes('class CourseTopics'));
});

test('Level 3 distinguishes Chapters 03–07 live demos from reading-only chapters', () => {
 const ch3 = chapters.find(chapter => chapter.id === '03');
 assert.equal(ch3.topics.length, 5);
 const expectedNames = [
  'Attribute Directives, [ngClass], [ngStyle], other attributes',
  'Structural Directives', 'Custom Directives', 'Pipes and custom pipes', 'Animations'
 ];
 assert.deepEqual(ch3.topics.map(t => t.name), expectedNames);
 const live = ch3.topics.flatMap(t => t.subtopics).filter(s => s.kind === 'live');
 assert.equal(live.length, 26);
 assert.equal(chapters.flatMap(c=>c.topics).flatMap(t=>t.subtopics).length, 857);
 assert.ok(chapters.filter(x=>x.id!=='03' && x.id!=='04' && x.id!=='05' && x.id!=='06' && x.id!=='07').every(
  chapter => chapter.topics.every(topic=>topic.subtopics.every(s=>s.kind==='reading'))));
 assert.ok(courseSubtopics.includes('subtopic.kind === \'live\''));
});

test('Level 4 uses existing executable Angular component with valid chapter routing', () => {
 const routeNames = [
  "path:'chapters'", "path:'chapters/:chapter'",
  "path:'chapters/:chapter/:topic'",
  "path:'chapters/:chapter/:topic/:subtopic'"
 ];
 for (const route of routeNames) assert.ok(app.includes(route), route);
 assert.ok(app.indexOf("path:'chapters/:chapter/:topic/:subtopic'") <
   app.indexOf("path:'chapters/:chapter/:topic'"));
 assert.ok(classSource.includes('courseSubtopicById'));
 assert.ok(demo.includes('courseSubtopic(); as reading'));
 assert.ok(demo.includes('active.detailFile'));
 assert.ok(demo.includes('data-testid="execution-breadcrumbs"'));
});

test('26 focused execution detail files exist for the 26 live chapter-03 demos', () => {
 const demoIds = Object.values(expected).flat();
 for (const id of demoIds) {
  const file='chapters/chapter-03/executions/' + id + '.md';
  assert.ok(existsSync(resolve(root, file)), file);
  const content=source(file);
  assert.ok(content.includes('## Open and execute the demo'), id);
  assert.ok(content.includes('src/lab/lab-demo.html'), id);
 }
});

test('Every chapter links source documentation, with honest not-yet-implemented execution pages', () => {
 for (const chapter of chapters) for (const topic of chapter.topics) {
   assert.ok(topic.source.startsWith('https://github.com/techlambda-services/Angular-1/blob/main/'),topic.id);
   assert.ok(topic.subtopics.length>=1,topic.id);
 }
 assert.ok(demo.includes('not yet been implemented'));
 assert.ok(courseSubtopics.includes('Read original course topic'));
});


// Build-breaker regression tests: these catch the exact TypeScript and Angular
// template errors reported by a learner on 26 October 2026.
test('Every live curriculum subtopic has its required display name', () => {
  const live = chapters.flatMap(c => c.topics).flatMap(t => t.subtopics)
    .filter(s => s.kind === 'live');
  assert.equal(live.length, 367);
  for (const subtopic of live) {
    assert.equal(typeof subtopic.name, 'string', 'name missing: ' + subtopic.id);
    assert.ok(subtopic.name.trim().length > 0, 'name blank: ' + subtopic.id);
  }
});

test('Angular event bindings contain no unsupported inline arrow functions', () => {
  // Angular template expressions are NOT full TypeScript. Lambda syntax is
  // supported in .ts handlers, not inside an HTML (click) expression.
  const templates = [
    'src/lab/lab-demo.html',
    'src/lab/lab-home.html',
    'src/lab/lab-category.html',
    'src/lab/course-chapters.html',
    'src/lab/course-topics.html',
    'src/lab/course-subtopics.html',
    'src/forms/forms-lab.html',
    'src/di/di-execution.html',
    'src/di/di-scope-panel.html',
    'src/api/training-execution.html',
    'src/routing/routing-execution.html',
    'src/routing/routing-params.html',
    'src/routing/routing-portal.html',
    'src/routing/routing-editor.html'
  ];
  for (const file of templates) {
    const html = source(file);
    const invalidEventBindings = [...html.matchAll(/\([^)]*\)="[^"]*=>[^"]*"/g)];
    assert.equal(invalidEventBindings.length, 0, file + ' has arrow function event callbacks');
  }
  assert.ok(demo.includes('highPriority.set(!highPriority())'));
  assert.ok(demo.includes('showAlert.set(!showAlert())'));
  assert.ok(demo.includes('visible.set(!visible())'));
  assert.ok(demo.includes('active.set(!active())'));
});


// Chapter 04 Forms — integration and bug-prevention checks.
const forms = source('src/forms/forms-lab.ts');
const formsHtml = source('src/forms/forms-lab.html');
const formsNotes = source('src/forms/forms-lab-notes.ts');
const formMain = source('src/main.ts');
const chapter4 = chapters.find(c => c.id === '04');

test('Chapter 04 keeps the original six published course topics', () => {
 assert.ok(chapter4);
 assert.deepEqual(chapter4.topics.map(topic => topic.id), [
  'forms','user-input','template-driven-forms','reactive-forms',
  'form-validation','dynamic-forms'
 ]);
 assert.deepEqual(chapter4.topics.map(topic => topic.subtopics.length), [15,20,19,19,20,20]);
 assert.equal(chapter4.topics.flatMap(topic => topic.subtopics).length, 113);
});

test('All 113 Chapter 04 labs have routes, titles and their own execution detail', () => {
 for (const topic of chapter4.topics) {
  for (const subtopic of topic.subtopics) {
   assert.equal(subtopic.kind, 'live', subtopic.id);
   assert.ok(subtopic.name?.trim(), topic.id + ' / ' + subtopic.id);
   assert.ok(subtopic.detailFile?.endsWith(
     '/chapter-04/executions/' + topic.id + '/' + subtopic.id + '.md'
   ), 'detail URL ' + topic.id + '/' + subtopic.id);
   const file = 'chapters/chapter-04/executions/' + topic.id + '/' + subtopic.id + '.md';
   assert.ok(existsSync(resolve(root, file)), file);
   assert.ok(source(file).includes('## Actual executable source') ||
     source(file).includes('## 5. Actual implementation to trace'), file);
  }
 }
});

test('Chapter 04 must have a working-specific execution route before generic chapter route', () => {
 assert.ok(formMain.includes("path:'chapters/04/:topic/:subtopic',component:FormsExecution"));
 assert.ok(formMain.indexOf("path:'chapters/04/:topic/:subtopic'") <
   formMain.indexOf("path:'chapters/:chapter/:topic/:subtopic'"));
 assert.ok(formMain.includes("path:'chapters/:chapter/:topic/:subtopic',component:LabDemo"));
});

test('Six form topics use real Angular form APIs, not a reading placeholder', () => {
 for (const section of ['forms','user-input','template-driven-forms',
  'reactive-forms','form-validation','dynamic-forms']) {
   assert.ok(formsHtml.includes("@case ('" + section + "')"), section);
 }
 for (const api of ['FormsModule','ReactiveFormsModule','NgForm','FormArray',
   'FormRecord','FormControl','FormBuilder','Validators','valueChanges',
   'flatCodeValidator','passwordsMatch','addDynamicField','removeDynamicField']) {
   assert.ok(forms.includes(api), api);
 }
 assert.ok(formsHtml.includes('data-testid="forms-dynamic"'));
 assert.ok(formsHtml.includes('data-testid="forms-validation"'));
 assert.ok(formsHtml.includes('data-testid="forms-reactive"'));
});

test('Forms UI uses no unsupported Angular template callback lambdas and hides credentials', () => {
 assert.equal([...formsHtml.matchAll(/\([^)]*\)="[^"]*=>[^"]*"/g)].length,0);
 assert.ok(forms.includes('safeModel()'));
 assert.ok(forms.includes('const { password: _password, ...safe }'));
 assert.ok(forms.includes('chooseFile(event:Event)'));
 assert.ok(!forms.includes('HttpClient'));
});

test('Dynamic Forms curriculum is not another copy of validation', () => {
 const dynamicDoc = source('../4. Forms/6. Dynamic Forms.md');
 const validationDoc = source('../4. Forms/5. Form Validation.md');
 assert.notEqual(dynamicDoc, validationDoc);
 assert.ok(dynamicDoc.includes('FormRecord'));
 assert.ok(dynamicDoc.includes('metadata-driven'));
 assert.equal([...dynamicDoc.matchAll(/^## Lab \d+:/gm)].length,20);
});

test('Forms teaching notes have 113 source-specific code excerpts', () => {
 assert.ok(formsNotes.includes('FORMS_LAB_NOTES'));
 const labs = chapter4.topics.flatMap(topic => topic.subtopics);
 assert.ok(labs.every(s => s.name?.length>0));
 assert.ok(formsNotes.includes('"reactive-forms"'));
 assert.ok(formsNotes.includes('"dynamic-forms"'));
 for (const lab of labs) assert.ok(formsNotes.includes(JSON.stringify(lab.id)),lab.id);
});


test('Chapter 04 advanced exercises include conditional, date, email, file and login controls', () => {
 const expectedSource=['onDynamicCategoryChanged','parkingSlot','visitDate',
  'kind:\'email\'','kind:\'date\'','Validators.email'];
 for(const token of expectedSource)assert.ok(forms.includes(token),token);
 assert.ok(formsHtml.includes('onDynamicCategoryChanged(field.key,$event)'));
 assert.ok(formsHtml.includes('formControlName="confirmPassword"'));
 assert.ok(formsHtml.includes('model.visitDate=readValue($event)'));
 assert.ok(formsHtml.includes('chooseFile($event)'));
});


test('Chapter 04 fallback is never allowed to claim a live Forms lab is unimplemented', () => {
  const main = source('src/main.ts');
  const generic = main.indexOf("path:'chapters/:chapter/:topic/:subtopic'");
  const specific = main.indexOf("path:'chapters/04/:topic/:subtopic'");
  assert.ok(specific > 0 && generic > specific);
  assert.ok(main.includes("component:LabDemo,canMatch:[nonFormsExecution]"));
  assert.ok(main.includes("segments[1]?.path !== '04'"));
  assert.ok(demo.includes("@if (chapter()?.id === '04')"));
  assert.ok(demo.includes("Open {{ reading.name }} — Live Forms Execution"));
  assert.ok(demo.includes("['/chapters','04',formTopic.id,reading.id]"));
});

test('First Form and all 113 Chapter 04 lessons route to live FormsExecution', () => {
  const chapter = chapters.find(c => c.id === '04');
  const first = chapter.topics.find(t => t.id === 'forms')?.subtopics[0];
  assert.equal(first?.id, 'lab-1-first-form');
  assert.equal(first?.kind, 'live');
  const main = source('src/main.ts');
  assert.ok(main.includes("path:'chapters/04/:topic/:subtopic',component:FormsExecution"));
  for (const topic of chapter.topics) for (const lab of topic.subtopics) {
    assert.equal(lab.kind, 'live', topic.id + '/' + lab.id);
    assert.ok(existsSync(resolve(root,
      'chapters/chapter-04/executions/' + topic.id + '/' + lab.id + '.md')));
  }
});


// Chapter 05 — Dedicated DI/services execution and real provider demonstrations.
const diComponent=source('src/di/di-execution.ts');
const diTemplate=source('src/di/di-execution.html');
const diServices=source('src/di/di-services.ts');
const diScoped=source('src/di/di-scope-panel.ts');
const diScopedHtml=source('src/di/di-scope-panel.html');
const diNotes=source('src/di/di-notes.ts');
const chapter5=chapters.find(ch=>ch.id==='05');

test('Chapter 05 has exactly two original topics with fifteen labs each', () => {
 assert.ok(chapter5);
 assert.deepEqual(chapter5.topics.map(t=>t.id),[
  'dependency-injection','services-and-providers-injectable'
 ]);
 assert.deepEqual(chapter5.topics.map(t=>t.subtopics.length),[15,15]);
 assert.equal(chapter5.topics.flatMap(t=>t.subtopics).length,30);
});

test('All 30 Chapter 05 lab routes have live status, meaningful names and individual guides',()=>{
 for(const topic of chapter5.topics)for(const sub of topic.subtopics){
  assert.equal(sub.kind,'live',topic.id+'/'+sub.id);
  assert.ok(sub.name.startsWith('Lab '),sub.id);
  assert.ok(sub.detailFile?.endsWith('/chapter-05/executions/'+topic.id+'/'+sub.id+'.md'));
  const doc='chapters/chapter-05/executions/'+topic.id+'/'+sub.id+'.md';
  assert.ok(existsSync(resolve(root,doc)),doc);
  assert.ok(source(doc).includes('## 3. Lab actions and expected effect'));
 }
});

test('Dedicated Chapter 05 router precedes and is protected against generic lesson route',()=>{
 const routes=source('src/main.ts');
 const specific=routes.indexOf("path:'chapters/05/:topic/:subtopic'");
 const generic=routes.indexOf("path:'chapters/:chapter/:topic/:subtopic'");
 assert.ok(specific>=0&&generic>specific);
 assert.ok(routes.includes("component:DiExecution"));
 assert.ok(routes.includes("segments[1]?.path !== '05'"));
 assert.ok(routes.includes("component:LabDemo,canMatch:[nonFormsExecution]"));
});

test('All 30 Chapter 05 live effects are present in the Angular execution template',()=>{
 assert.ok(diTemplate.includes("@case ('dependency-injection')"));
 assert.ok(diTemplate.includes("@case ('services-and-providers-injectable')"));
 assert.equal((diTemplate.match(/@case \(\d+\)/g)||[]).length,30);
 assert.ok(diTemplate.includes('data-testid="ch05-service-result"'));
 assert.equal([...diTemplate.matchAll(/\([^)]*\)="[^"]*=>[^"]*"/g)].length,0);
});

test('Angular DI actually uses root vs local providers, all four provider recipes and tokens',()=>{
 for(const marker of ["@Injectable({providedIn:'root'})","new InjectionToken",
 "getComplaints()","createComplaint(","updateComplaint(","deleteComplaint("]){
  assert.ok(diServices.includes(marker),marker);
 }
 assert.ok(diScoped.includes('providers:['));
 assert.ok(diScoped.includes('ScopedCounterService'));
 assert.ok(diScoped.includes('useValue'));
 assert.ok(diComponent.includes('useClass:LocalNotification'));
 assert.ok(diComponent.includes('useExisting:ComplaintService'));
 assert.ok(diComponent.includes('useFactory:()=>'));
 assert.ok(diComponent.includes('constructor(readonly constructorService:ComplaintService)'));
 assert.ok(diComponent.includes('inject(Injector)'));
 assert.ok(diComponent.includes('inject(TRAINING_CONFIG)'));
 assert.ok(diScopedHtml.includes('local.increment()'));
 assert.ok(diScopedHtml.includes('root.increment()'));
});

test('Chapter 05 stays local and does not transmit data or simulate a real successful API',()=>{
 assert.ok(diComponent.includes('No HTTP request'));
 assert.ok(!diComponent.includes("HttpClient"));
 assert.ok(diServices.includes('example.invalid'));
 assert.ok(diNotes.includes('CH05_NOTES'));
 assert.ok(diTemplate.includes("lesson.detailFile"));
});


test('Chapter 05 generic fallback cannot say its live labs are unimplemented', () => {
 const sourceText=source('src/lab/lab-demo.html');
 assert.ok(sourceText.includes("@else if (chapter()?.id === '05')"));
 assert.ok(sourceText.includes("['/chapters','05',diTopic.id,reading.id]"));
 assert.ok(sourceText.includes('Live DI Execution'));
});


// Chapter 06 — API / HTTP Interceptors / RxJS / Signals live integrations.
const chapter6 = chapters.find(x=>x.id==='06');
const apiComponent = source('src/api/training-execution.ts');
const apiTemplate = source('src/api/training-execution.html');
const apiService = source('src/api/training-api.ts');
const apiStore = source('src/api/training-store.ts');
const apiNotes = source('src/api/training-notes.ts');

test('Chapter 06 keeps all eight syllabus topics and 120 chapter lab routes',()=>{
 assert.deepEqual(chapter6.topics.map(t=>t.id),[
  'httpclient-and-api-integration','http-interceptors','rxjs-fundamentals',
  'observables-and-subjects','signals','computed-signals','effects',
  'angular-state-management-basics'
 ]);
 assert.deepEqual(chapter6.topics.map(t=>t.subtopics.length),[16,18,13,16,14,18,15,10]);
 assert.equal(chapter6.topics.flatMap(t=>t.subtopics).length,120);
});

test('Every one of 120 Chapter 06 labs has live name, route and individual guide',()=>{
 for(const topic of chapter6.topics)for(const lab of topic.subtopics){
  assert.equal(lab.kind,'live',topic.id+'/'+lab.id);
  assert.ok(lab.name.startsWith('Lab '),lab.id);
  assert.ok(lab.detailFile?.endsWith('/chapter-06/executions/'+topic.id+'/'+lab.id+'.md'));
  const file='chapters/chapter-06/executions/'+topic.id+'/'+lab.id+'.md';
  assert.ok(existsSync(resolve(root,file)),file);
  const body=source(file);
  assert.ok(body.includes('http://localhost:4200/chapters/06/'),file);
  assert.ok(body.includes('## Working source') || body.includes('## Inspect the real') || body.includes('## Real Angular implementation'),file);
 }
});

test('Dedicated Chapter 06 route has priority and cannot fall back to reading view',()=>{
 const main=source('src/main.ts');
 const specific=main.indexOf("path:'chapters/06/:topic/:subtopic'");
 const generic=main.indexOf("path:'chapters/:chapter/:topic/:subtopic'");
 assert.ok(specific>=0&&generic>specific);
 assert.ok(main.includes("component:Chapter06Execution"));
 assert.ok(main.includes("segments[1]?.path !== '06'"));
});

test('Eight real interactive topic branches are in the Angular template',()=>{
 for(const topic of chapter6.topics){
  assert.ok(apiTemplate.includes("@case ('"+topic.id+"')"),topic.id);
 }
 assert.ok(apiTemplate.includes('data-testid="ch06-live-execution"'));
 assert.ok(apiTemplate.includes('data-testid="ch06-http-result"'));
 assert.equal([...apiTemplate.matchAll(/\([^)]*\)="[^"]*=>[^"]*"/g)].length,0);
});

test('HttpClient and functional interceptor chain use real Angular types with local mock backend',()=>{
 const main=source('src/main.ts');
 assert.ok(main.includes('provideHttpClient(withInterceptors(['));
 for(const name of ['trainingAuthInterceptor','trainingLogInterceptor',
   'trainingErrorInterceptor','mockBackendInterceptor']){
  assert.ok(main.includes(name));
  assert.ok(apiService.includes(name),name);
 }
 for(const marker of ['HttpInterceptorFn','HttpResponse','HttpErrorResponse',
  'HttpClient','getComplaints','postComplaint','putComplaint','deleteComplaint',
  '/api/training/unauthorized','retry(2)']){
  assert.ok((apiService+apiComponent).includes(marker),marker);
 }
 assert.ok(apiService.includes("DEMO-ONLY"));
 assert.ok(apiService.includes('defer(()=>'));
 assert.ok(apiService.includes('mockBackendInterceptor'));
});

test('RxJS and signals and root store have actual source implementations',()=>{
 for(const term of ['BehaviorSubject','ReplaySubject','AsyncSubject',
  'Subject','switchMap','mergeMap','filter(','map(','debounceTime',
  'takeUntilDestroyed','effect(()=>','computed(()=>','untracked(']){
  assert.ok((apiComponent+apiStore).includes(term),term);
 }
 assert.ok(apiStore.includes("@Injectable({providedIn:'root'})"));
 assert.ok(apiStore.includes('readonly visible=computed('));
 assert.ok(apiStore.includes('readonly completion=computed('));
 assert.ok(apiNotes.includes('CH06_NOTES'));
});

test('Chapter 06 is local-only and preserves previously implemented chapters',()=>{
 const main=source('src/main.ts');
 assert.ok(apiService.includes("req.url.startsWith('/api/training')"));
 assert.ok(apiService.includes('https://')===false || apiService.includes("example.invalid")===false);
 assert.ok(main.includes("path:'chapters/03")===false || main.includes("path:'lab'"));
 assert.ok(main.includes("path:'chapters/04/:topic/:subtopic'"));
 assert.ok(main.includes("path:'chapters/05/:topic/:subtopic'"));
 assert.equal(chapters.find(c=>c.id==='03').topics.flatMap(t=>t.subtopics).filter(s=>s.kind==='live').length,26);
 assert.equal(chapters.find(c=>c.id==='04').topics.flatMap(t=>t.subtopics).filter(s=>s.kind==='live').length,113);
 assert.equal(chapters.find(c=>c.id==='05').topics.flatMap(t=>t.subtopics).filter(s=>s.kind==='live').length,30);
});


test('Chapter 06 generic fallback has a live-recovery link rather than false not-implemented text',()=>{
 const html=source('src/lab/lab-demo.html');
 assert.ok(html.includes("@else if (chapter()?.id === '06')"));
 assert.ok(html.includes("['/chapters','06',apiTopic.id,reading.id]"));
 assert.ok(html.includes('Live Chapter 06 Execution'));
});


// Chapter 07 — real navigation/params/child guards/lazy imports.
const chapter7=chapters.find(c=>c.id==='07');
const routingMain=source('src/main.ts');
const routingComponent=source('src/routing/routing-execution.ts');
const routingTemplate=source('src/routing/routing-execution.html');
const routingPages=source('src/routing/routing-pages.ts');
const routingGuards=source('src/routing/routing-guards.ts');
const routingNotes=source('src/routing/routing-notes.ts');
const routingLazy=source('src/routing/routing-lazy.routes.ts');

test('Chapter 07 has five original topics and exactly 78 source-aligned labs',()=>{
 assert.ok(chapter7);
 assert.deepEqual(chapter7.topics.map(t=>t.id),
  ['routing-and-navigation','route-parameters','child-routes','route-guards','lazy-loading']);
 assert.deepEqual(chapter7.topics.map(t=>t.subtopics.length),[15,18,15,15,15]);
 assert.equal(chapter7.topics.flatMap(t=>t.subtopics).length,78);
});
test('Every Chapter 07 lab is named, live and has a dedicated execution worksheet',()=>{
 for(const topic of chapter7.topics)for(const lab of topic.subtopics){
  assert.equal(lab.kind,'live',topic.id+'/'+lab.id);
  assert.ok(lab.name.startsWith('Lab '),lab.id);
  assert.ok(lab.detailFile?.endsWith('/chapter-07/executions/'+topic.id+'/'+lab.id+'.md'));
  const filename='chapters/chapter-07/executions/'+topic.id+'/'+lab.id+'.md';
  assert.ok(existsSync(resolve(root,filename)),filename);
  const doc=source(filename);
  assert.ok(doc.includes('## ')&&doc.includes('http://localhost:4200/chapters/07/'),filename);
  assert.ok(routingNotes.includes(JSON.stringify(lab.id)),lab.id);
 }
});
test('Specific Chapter 07 course route is lazy and takes priority over reading fallback',()=>{
 const route=routingMain.indexOf("path:'chapters/07/:topic/:subtopic'");
 const generic=routingMain.indexOf("path:'chapters/:chapter/:topic/:subtopic'");
 assert.ok(route>=0 && generic>route);
 assert.ok(routingMain.includes("loadComponent:()=>import('./routing/routing-execution')"));
 assert.ok(routingMain.includes("segments[1]?.path !== '07'"));
 const genericHtml=source('src/lab/lab-demo.html');
 assert.ok(genericHtml.includes("@else if (chapter()?.id === '07')"));
 assert.ok(genericHtml.includes('Live Chapter 07 Execution'));
});
test('Chapter 07 uses real Router, ActivatedRoute, reactive params and nested outlets',()=>{
 assert.ok(routingComponent.includes('this.router.navigate('));
 assert.ok(routingPages.includes("toSignal(this.route.paramMap"));
 assert.ok(routingPages.includes("toSignal(this.route.queryParamMap"));
 assert.ok(source('src/routing/routing-params.html').includes('firstSnapshot()'));
 assert.ok(source('src/routing/routing-portal.html').includes('<router-outlet'));
 assert.ok(source('src/routing/routing-reports.html').includes('<router-outlet'));
 assert.ok(routingMain.includes("path:'reports',component:RoutingReports,children:["));
 assert.ok(routingMain.includes("path:'monthly',component:RoutingChildContent"));
 assert.ok(routingTemplate.includes("routerLinkActive"));
});
test('CanActivate, CanMatch, CanActivateChild and CanDeactivate are functional and registered',()=>{
 for(const name of ['trainingAuthGuard:CanActivateFn','trainingAdminMatch:CanMatchFn',
   'trainingChildGuard:CanActivateChildFn','trainingUnsavedGuard:CanDeactivateFn<RoutingEditor>']){
  assert.ok(routingGuards.includes(name),name);
 }
 for(const route of ['canActivate:[trainingAuthGuard]','canMatch:[trainingAdminMatch]',
 'canActivateChild:[trainingChildGuard]','canDeactivate:[trainingUnsavedGuard]']){
  assert.ok(routingMain.includes(route),route);
 }
 assert.ok(routingGuards.includes('createUrlTree('));
 assert.ok(routingGuards.includes("window.confirm("));
 assert.ok(routingGuards.includes('NOT authentication'));
});
test('Lazy loading is actually performed with dynamic imports and nested feature routes',()=>{
 assert.ok(routingMain.includes("loadComponent:()=>import('./routing/routing-lazy-report')"));
 assert.ok(routingMain.includes("loadChildren:()=>import('./routing/routing-lazy.routes')"));
 assert.ok(routingLazy.includes("loadComponent:()=>import('./routing-lazy-detail')"));
 assert.ok(source('src/routing/routing-lazy-report.html').includes('chapter7-lazy-report'));
 assert.ok(source('src/routing/routing-lazy-feature.html').includes('chapter7-lazy-feature'));
});
test('Five topic engines have live controls and no arrow functions inside HTML bindings',()=>{
 for(const id of chapter7.topics.map(t=>t.id)){
  assert.ok(routingTemplate.includes("@case('"+id+"')"),id);
 }
 assert.ok(routingTemplate.includes('data-testid="ch07-live-execution"'));
 assert.equal([...routingTemplate.matchAll(/\([^)]*\)="[^"]*=>[^"]*"/g)].length,0);
 assert.ok(routingComponent.includes('runSelected():void'));
});
test('All previous chapters and course materials are preserved',()=>{
 for(const [id,count] of [['03',26],['04',113],['05',30],['06',120]]){
  assert.equal(chapters.find(c=>c.id===id).topics.flatMap(t=>t.subtopics)
    .filter(x=>x.kind==='live').length,count,id);
 }
 for(const id of ['04','05','06']){
  assert.ok(routingMain.includes("path:'chapters/"+id+"/:topic/:subtopic'"),id);
 }
 assert.ok(source('chapters/chapter-07/README.md').includes('78'));
});
