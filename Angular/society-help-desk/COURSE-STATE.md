# COURSE-STATE — Angular chapter hierarchy

**Project:** Society Help Desk (Angular 20.3)
**Canonical navigation:** Chapters → Topics → Subtopics → Execution
**Source of chapter/topic/subtopic truth:** Existing numbered Angular course Markdown files on this repository's main branch.

## Structural delivery

| Acceptance check | Source status |
| --- | --- |
| 11 chapters browsable | Authored |
| 59 course topics linked to original files | Authored |
| 857 source-based subtopic entries | Authored |
| Chapter 03: five original topics | Authored |
| Chapter 03: 26 live demo implementations | Existing implementations reused |
| Chapter 04: 6 Forms topics and 113 live lab routes | Authored, using six reusable interactive Forms examples |
| Chapter 04: 113 source-aligned execution guides | Authored |
| Dynamic Forms syllabus (previous duplicate) | Corrected and replaced with 20 schema-driven labs |
| Dedicated Chapter 03 demo detail file for each effect | 26 authored |
| Legacy /lab routes | Preserved |
| Dashboard, New Complaint and About | Preserved |
| Not-yet-built demos in other chapters | Explicitly labeled reading rather than falsely marked live |
| Node structural acceptance tests | 16 authored; actual Node run pending |
| Build log from learner (26 October 2026) | TS2741 and NG5002 compile errors confirmed; corrections staged |
| npm dependency installation | Not verified here |
| Angular production build | Not verified here |
| Browser interaction and accessibility checks | Not verified here |

## Student verification commands

From Angular-1 root:

    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

Check http://localhost:4200/chapters and the nested Chapter 03 / Attribute Directives / ngClass effect.

## Definition of done before claiming 'working'

- [ ] npm test:lab outputs passing tests on a compatible Node runtime.
- [ ] Angular build completes with zero compile errors.
- [ ] All four route levels render, including refresh on an execution detail URL.
- [ ] All 26 Chapter 03 live controls show expected output and reset behavior.
- [ ] Chapter 04: open all 113 lab routes and verify each of the six form engines, validators, metadata controls and state output.
- [ ] Original /dashboard, /new and /about routes still operate.
- [ ] Documentation-only subtopics clearly show status and link to the correct Markdown section.
- [ ] Responsive/keyboard/reduced-motion checks completed.
- [ ] Store local evidence screenshots and terminal results.

**Implementation note:** The source has not been separately cloned into this authoring environment for an end-to-end Angular build. Record evidence after local execution before marking runtime READY.


## Build blocker correction — 26 October 2026

The compiler log reported **26 missing live-subtopic names** in course-catalog.ts and **8 Angular template lambda callbacks** in lab-demo.html. Both code defects are corrected in the current patch. The 16 Node acceptance tests now include regressions for these errors. **A clean Angular build is still pending external execution.** See [the root cause and commands](BUILD-RCA-2026-10-26.md).

## Chapter 04 checkpoint — Forms

Six course topics and 113 lab routes were connected to a shared standalone FormsExecution component, with a separate execution Markdown guide per lab. The original Dynamic Forms syllabus file duplicated Form Validation and has been corrected. Current delivery is source-authored and static-tested; npm tests, Angular compiler build and hands-on browser acceptance are **pending**.

## Chapter 04 execution route regression correction

A generic Chapter 03 execution route could display the reading-only "not yet implemented" page for a Chapter 04 lab in a stale or mismatched route context. Dedicated Forms execution is now protected from the generic handler with CanMatchFn; a recovery link is also added. Two tests cover fallback protection and 113 live Chapter 04 subtopics. Local `git pull`, server restart, `npm run test:lab`, and `npm run build` are required to verify runtime behavior. See [RCA](CHAPTER-04-ROUTE-FIX.md).

## Chapter 05 checkpoint — Dependency Injection and Services

Two original topics with 15 labs each (30 total) are connected to a dedicated DI execution screen. Thirty detailed Markdown guides were added, with original syllabus snippets, actions, expected results, memory hooks, viva and evidence. Actual Angular injector behavior is demonstrated using root and component providers, injection tokens, constructor injection and inject(). Static source review: 19/19 checks passed. **Runtime npm tests, Angular compiler build and browser walkthrough are not yet verified.**

## Chapter 06 checkpoint — API Integration, RxJS and Signals

All eight original topics and 120 numbered labs are mapped to a dedicated Chapter 06 execution component and 120 Markdown detail guides. The code implements real HttpClient + functional interceptors with an in-memory training backend, RxJS Observables/Subjects, signals, computed/effect, and root state store. The mock headers are not credentials. No external HTTP calls or production persistence are claimed. Structural source acceptance tests were extended; **npm install, executed node tests, Angular compiler build, browser navigation and live interactions remain pending external runtime verification**.

## Chapter 07 checkpoint — Routing and Navigation

The five original topics with 15/18/15/15/15 labs are mapped to a dedicated Chapter 07 execution component and 78 individual Markdown lab guides. Real Angular URL navigation, ActivatedRoute paramMap/queryParamMap, nested router-outlet, CanActivate/CanMatch/CanActivateChild/CanDeactivate and dynamic loadComponent/loadChildren imports are implemented. Frontend sign-in/roles are FAKE demo state; backend authorization is not claimed. Structural regression tests were extended; **npm install, executed Node tests, Angular compiler build and live browser/DevTools confirmation are pending external runtime verification**.
