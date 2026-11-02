# Techlambda Angular — Chapters → Topics → Subtopics → Execution

One Angular 20.3 Society Help Desk workspace, aligned to **all 11 chapter directories and 59 numbered course topic files**. The initial URL is /chapters, not the old /lab home.

## Four-level navigation

1. **Chapters:** all 11 Angular course chapters.
2. **Topics:** names from the original numbered Markdown syllabus files.
3. **Subtopics:** actual exercises/demos, with explicit live-vs-reading status.
4. **Execution detail:** real Angular effect, interactive controls, expected output, code explanations, and a dedicated topic detail Markdown file for implemented examples.

Chapter 03 currently has **26 live demo implementations grouped under its 5 original course topics**:
- Attribute Directives, [ngClass], [ngStyle], other attributes — 3 demos
- Structural Directives — 3 demos
- Custom Directives — 2 demos
- Pipes and custom pipes — 10 demos
- Animations — 8 demos

Chapter 04 has six working-source Angular Forms demonstration modes with **113 syllabus-aligned lab execution routes**. Every Forms subtopic includes its own Markdown execution guide; related labs share the same six carefully maintained demo engines. Chapter 05 has two DI/Services demo topics with 30 live lab routes. Chapter 06 has eight API/RxJS/Signals topic engines with **120 source-aligned live lesson routes and 120 dedicated guides**. Chapter 07 adds **five real Angular Routing/Navigation engines, 78 lab routes and 78 individual guides**. The remaining chapters' lab demos are marked **Not yet implemented**. They link to existing original course notes rather than pretending to run unbuilt code.

## Run on Windows PowerShell

Use a Node.js version supported by this existing Angular 20.3 project: https://angular.dev/reference/versions.

From the Angular-1 repository root:

    git pull origin main
    cd Angular/society-help-desk
    node --version
    npm install
    npm run test:lab
    npm run build
    npm start

Open http://localhost:4200.

## Example navigation

    /chapters
       → /chapters/03
       → /chapters/03/attribute-directives
       → /chapters/03/attribute-directives/ngclass

At the final URL, click **Toggle High priority** and observe the complaint card's style and status update. Then click the link to the dedicated execution detail file.

More executable examples:
- /chapters/03/pipes-and-custom-pipes/currency
- /chapters/03/custom-directives/hover
- /chapters/03/animations/leave

## Chapter 04 routing correction

If an execution screen says "not yet implemented" for a Chapter 04 Forms lab, see [the routing fix and local synchronization instructions](CHAPTER-04-ROUTE-FIX.md). The generic demo route is now forbidden from intercepting Chapter 04, and 113 lab execution routes are regression-checked.


## Chapter 07 — Routing and Navigation

[Chapter 07 start here](chapters/chapter-07/README.md): five original syllabus topics and **78 fourth-level execution routes**, each with a detailed source-linked Markdown guide.

The same Society Help Desk Angular app now demonstrates:
- Real RouterLink, Router.navigate, RouterLinkActive, default/wildcard navigation.
- ActivatedRoute snapshot vs observed paramMap/queryParamMap, IDs and URL filters.
- Actual nested router-outlet with default children and a second-level Reports outlet.
- Real CanActivateFn, CanMatchFn, CanActivateChildFn and CanDeactivateFn; demo sign-in/roles are NOT authentication and never secure a server.
- Real code splitting with loadComponent, loadChildren and a nested dynamically imported component. Confirm chunks via DevTools and a production build.
- A dedicated Chapter 07 lazy-loaded execution route before the generic reading handler, with guard against false "not implemented" detail screens.

**Working source:** src/routing/routing-execution.ts, routing-pages.ts, routing-guards.ts, routing-lazy.routes.ts and routing-notes.ts.

**Validation:** Source structure and route mappings can be inspected. npm tests, Angular compilation and live browser acceptance remain to be executed on the instructor workstation.

## Chapter 06 — API Integration, RxJS and Signals

[Chapter 06 start here](chapters/chapter-06/README.md): eight original syllabus topics, 120 lab URLs and 120 Markdown execution guides within the SAME Angular Society Help Desk app.

- API lessons use actual Angular HttpClient and functional interceptors, terminating in an **in-memory mock backend**. There is no Flask/FastAPI dependency or live server. GET, POST, PUT, DELETE, status headers, fake 401/403/500 errors, 503 retry and loading traces are observable.
- RxJS examples include Observable, Subject/BehaviorSubject/ReplaySubject/AsyncSubject, map/filter/tap and switchMap/mergeMap.
- Angular Signals, computed(), effect(), a root-provided state store, derived selectors, and benign theme storage are demonstrated with fictional data.
- The dedicated `chapters/06/:topic/:subtopic` execution route takes precedence over the generic reading detail route and is guarded from accidental fallback.
- Canonical example: `/chapters/06/httpclient-and-api-integration/lab-3`.
- Working source: `src/api/training-api.ts`, `training-execution.ts`, `training-execution.html`, `training-store.ts`, `training-notes.ts`.

**Runtime acceptance:** Execute `npm run test:lab`, `npm run build`, and a browser walkthrough locally. Source review alone cannot establish a successful Angular compilation.

## Chapter 05 — Dependency Injection and Services

[Chapter 05 start here](chapters/chapter-05/README.md) — 2 original topics, 30 named lab routes, each with an interactive Angular execution and a dedicated Markdown guide.

The live implementation uses genuine Angular DI: root @Injectable services, constructor injection, inject(), Injector.get(), tokens, useValue, useClass, useExisting, useFactory, and component-scoped providers demonstrated with two independent child components.

- Canonical path: /chapters/05/dependency-injection/lab-7
- Working source: src/di/di-execution.ts, di-execution.html, di-services.ts and di-scope-panel.ts
- Concept notes: src/di/di-notes.ts
- Focused guides: chapters/chapter-05/executions/<topic>/lab-*.md
- All API, account and complaint examples are deliberately fictional/local. No network requests or real funds.

## Chapter 04 Forms — new practical delivery

- [Chapter 04 start here](chapters/chapter-04/README.md) — six topics, 113 lesson routes, student exercises, local run steps.
- Angular source: src/forms/forms-lab.ts, forms-lab.html, forms-lab.css and forms-lab-notes.ts.
- Dynamic Forms syllabus correction: the previous sixth topic file duplicated Form Validation and is now replaced by twenty genuine schema-driven labs.
- Execution example: /chapters/04/dynamic-forms/lab-1-metadata-driven-form-problem-and-architecture.
- The Forms demos use local UI state only. Passwords are hidden from preview and selected files are never uploaded.

## Source map

| Responsibility | File |
| --- | --- |
| Root routes | src/main.ts |
| Source-aligned curriculum map | src/lab/course-catalog.ts |
| Three hierarchy components | src/lab/course-pages.ts |
| Chapter cards | src/lab/course-chapters.html |
| Topic list | src/lab/course-topics.html |
| Subtopic list | src/lab/course-subtopics.html |
| Live execution detail | src/lab/lab-demo.ts and src/lab/lab-demo.html |
| Demo catalog and explanations | src/lab/lab.catalog.ts |
| Custom directive and pipe | src/lab/lab-directives.ts and src/lab/lab-status.pipe.ts |
| Animations and layout | src/lab/lab.css |
| 26 individual Chapter 03 detail guides | chapters/chapter-03/executions/*.md |
| 113 individual Chapter 04 detail guides | chapters/chapter-04/executions/**/*.md |
| Interactive Angular Forms engine | src/forms/forms-lab.ts / forms-lab.html |
| Lab-specific Forms teaching notes | src/forms/forms-lab-notes.ts |
| Structural verification | scripts/lab-acceptance.test.mjs |

## Existing application and URLs

The older /lab routes and original /dashboard, /new and /about screens remain available. Module 03 is built into the **same running application**; no extra nested Angular app exists.

## Latest build issue and RCA

[26 October 2026: Fix for TS2741 / NG5002 compiler failures](BUILD-RCA-2026-10-26.md). The fix updates 26 required live-subtopic names, replaces 8 unsupported template lambda expressions and adds two regression checks. Run a fresh production build to confirm.

## Acceptance gates

Run npm run test:lab for the source hierarchy and implementation mapping. Run npm run build for real Angular compiler validation. Start the app and manually navigate each level, test the 26 demo effects, broken URL behavior, reset, responsive design and original dashboard.

**Verification status:** Authoring and structural review do not establish a successful npm install, Angular compilation or browser run. Complete those checks locally before calling the runtime verified.

[Chapter 03 learning guide](chapters/chapter-03/README.md) · [Project roadmap](../PROJECT-ROADMAP-SOCIETY-HELP-DESK.md)

