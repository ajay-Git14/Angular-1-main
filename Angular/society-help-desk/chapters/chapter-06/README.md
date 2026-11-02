# Chapter 06 — API Integration, RxJS and Signals

**Workflow:** Chapters → Topics → Subtopics → Live Execution  
**Project:** Existing Society Help Desk (Angular 20.3, standalone components)  
**Curriculum:** 8 published topics, 120 subtopics, each with a dedicated Markdown guide and a live topic-engine execution URL.

## What you'll learn

| Original syllabus topic | Subtopic labs | Working Angular implementation |
| --- | ---: | --- |
| HttpClient and API integration | 16 | GET/POST/PUT/DELETE, headers, status filter, response/error |
| HTTP Interceptors | 18 | Functional interceptors, mock auth header, logging, 401/403/500, loading, retry |
| RxJS fundamentals | 13 | of/from, pipe, map, filter, tap, switchMap, mergeMap |
| Observables and Subjects | 16 | Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject |
| Signals | 14 | signal(), set(), update(), object and array state |
| Computed Signals | 18 | Readonly computations, totals, percentages and dependent values |
| Effects | 15 | effect(), dependency tracking and observable reactions |
| Angular State Management Basics | 10 | Root store, computed selectors, BehaviorSubject, loading/error state |
| **Total** | **120** | 8 working topic engines + source-aligned lab selections |

Each numbered lab has its own fourth-level Angular route, explanation, original syllabus code excerpt and detailed execution file. Closely related labs intentionally reuse their topic-level engine and visual controls, so the app remains one maintainable project.

## Run on Windows PowerShell

From the Angular-1 repository root:

    git pull origin main
    cd Angular/society-help-desk
    node --version
    npm install
    npm run test:lab
    npm run build
    npm start

Open http://localhost:4200/chapters/06.

## Four-level navigation

    /chapters
      → /chapters/06
      → /chapters/06/httpclient-and-api-integration
      → /chapters/06/httpclient-and-api-integration/lab-3

On the fourth page click **Run Lab 3 HTTP example** or GET, inspect the result and interceptor trace, then review the source explanation.

Other routes:
- /chapters/06/http-interceptors/lab-10 — simulated HTTP 401 error
- /chapters/06/rxjs-fundamentals/lab-5 — map operator
- /chapters/06/observables-and-subjects/lab-12 — ReplaySubject
- /chapters/06/signals/lab-9 — immutable signal object update
- /chapters/06/computed-signals/lab-8 — reactive cart total
- /chapters/06/effects/lab-4 — tracked signal effect
- /chapters/06/angular-state-management-basics/lab-10 — store data/loading/error

## Important: HTTP requests do NOT leave the browser

The project registers **real Angular HttpClient and HttpInterceptorFn** providers. The final interceptor handles requests beginning with /api/training and returns actual HttpResponse/HttpErrorResponse Observable events from an in-memory model. Nothing is sent to a live server.

- Fake header: X-Training-Token = DEMO-ONLY (not a JWT).
- Mock API errors: 401/403/500, and a 503 retry example.
- Only fictional complaints and mock transfer output are used.
- The URL /api/training does not require Flask, FastAPI, PostgreSQL, accounts or keys.
- To connect a real API in a later chapter, replace the final mock interceptor with a configured backend; do not put secrets in frontend source.

## Canonical runnable files

| Purpose | Source |
| --- | --- |
| App bootstrap / route / registered interceptors | src/main.ts |
| Typed TrainingApi and local interceptor backend | src/api/training-api.ts |
| Shared root store with selectors | src/api/training-store.ts |
| 8 interactive topic engines and event handlers | src/api/training-execution.ts |
| 8 topic views and live results | src/api/training-execution.html |
| Training UI styles | src/api/training-execution.css |
| 120 lab-level original source explanations | src/api/training-notes.ts |
| Chapter/topic/subtopic source mapping | src/lab/course-catalog.ts |
| 120 execution worksheets | chapters/chapter-06/executions/<topic>/lab-*.md |
| Structural checks | scripts/lab-acceptance.test.mjs |

## Student evidence

[Practice](PRACTICE.md) · [Exercise TODO](TODO.ts) · [Worked solution](SOLUTION.md) · [All 120 execution guides](executions/)

**Acceptance boundary:** Source and structural tests can be reviewed in GitHub, but runtime Angular compilation, executed Node tests and a browser acceptance walkthrough must be completed locally before rating runtime readiness.

