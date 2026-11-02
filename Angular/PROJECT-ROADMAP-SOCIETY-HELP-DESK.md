# Angular Learning Project — Society Help Desk

> **Single project across all 11 modules** | Audience: beginner to job-ready | Product: portfolio-friendly complaint management web app

## The story
A residential society receives maintenance complaints about water, lifts, electricity and cleaning. Today the manager tracks these on paper. Our team will build a web application where residents submit complaints and staff track progress. Each Angular lesson contributes a usable feature to the same application.

**Project repository strategy:** Students maintain **one** `society-help-desk` Angular workspace for the course. Do not generate a new unrelated application for every topic. Each topic builds on the previous checkpoint. Keep separate Git commits and screenshots as evidence.

## Roadmap and incremental demonstrable outcomes

| Module | Feature added to the same app | Demonstration evidence | Checkpoint |
|---|---|---|---|
| 01 Fundamentals | Working Angular shell, society heading and welcome message | Run localhost + CLI version + screenshot | M01 |
| 02 Components & Templates | Dashboard, complaint cards, status actions, searchable complaint list | Show multiple cards and update status | M02 |
| 03 Directives, Pipes & Animations | Four-level chapter/topic/subtopic/execution navigation with 26 live examples across five syllabus topics and individual detail guides | Screens 1–4, before/after effects and a successful local build | M03 |
| 04 Forms | Six original syllabus topics, 113 source-aligned lab routes, native/template-driven/reactive/validation/dynamic Forms engine with dedicated execution guides | Demonstrate six forms modes, valid and invalid paths, schema add/remove, and successful local production build | M04 |
| 05 Services & DI | Two original topics and 30 lab-specific execution routes covering root/component injectors, InjectionTokens, provider recipes and in-memory service operations | Root vs local service demo, service CRUD and successful Angular build | M05 |
| 06 APIs, RxJS, Signals | 8 original topics, 120 source-aligned lab routes, real HttpClient/interceptors backed by in-memory simulation, RxJS stream operators, Signals/effect/computed and root TrainingStore | Validate CRUD/errors/retry, signals and store updates and a successful local build | M06 |
| 07 Routing | Five original topics, 78 source-aligned live routes and guides: RouterLink/Router.navigate, route/query params, nested outlets, functional guards and genuine lazy chunks | Navigate nested/guarded/lazy examples, show DevTools chunk evidence, and pass local Angular build | M07 |
| 08 Advanced Features | Reusable dialog, focus control, clean app structure | Reusable control demo | M08 |
| 09 Enterprise | Auth UI, roles, centralized error handling, uploads | Resident/admin demo with mocked or real backend stated explicitly | M09 |
| 10 Testing | Unit and component tests covering main flows | Test report and negative/positive tests | M10 |
| 11 Build & Performance | Production build and deployment instructions | Build output, deployed URL if hosted, demo video | M11 |


**Module 03 practical:** [Three-Screen Interactive Learning App](./3.%20Directives,%20Pipes%20and%20Animations/PROJECT-LAB-M03-THREE-SCREEN-LEARNING-APP.md) — integrated into the same Society Help Desk project.

## Student evidence package
Maintain an `evidence/` folder **outside the Angular app public assets** and commit only appropriate non-sensitive samples:

```text
society-help-desk/
  src/
  docs/
    project-overview.md
    architecture.md
    learning-log.md
  evidence/
    module-01/
    module-02/
    ...
    module-11/
  README.md
```

Every checkpoint includes (1) visible behavior, (2) runnable instructions, (3) screenshot(s) or a brief demo video, (4) code commit hash, (5) test or manual-check evidence, and (6) a short explanation of what changed. Do not commit passwords, personal data, secrets, or `node_modules`.

## Definition of Done (for each module)
- [ ] Existing app still starts with `ng serve`
- [ ] The new feature is visible, not just an unreferenced component
- [ ] `ng build` succeeds in the student's environment
- [ ] Core happy path plus one error/empty state are checked
- [ ] Screenshot and Git commit are captured
- [ ] Student can explain their contribution in under two minutes

## Recommended workflow
1. Start with Module 01; keep its project, or rename it carefully if already created. The project folder name is not important.
2. Build Module 02 incrementally using [Module 02 connected project lab](./2.%20ComponentsAndTemplates/PROJECT-LAB-M02-SOCIETY-HELP-DESK.md).
3. Continue using this same workspace for Modules 03–11.
4. Each learner publishes a sanitized public portfolio repository **only when approved to share the code**; otherwise provide a demo video and screenshots.

**Learning references:** https://angular.dev/tutorials/first-app · https://angular.dev/guide/components · https://angular.dev/guide/templates/control-flow · https://learn.microsoft.com/style-guide/procedures-instructions/writing-step-by-step-instructions

**Validation:** The workbook is documentation, not an executed CI test. Instructors must run the project with a pinned supported Angular/Node combination before class.
