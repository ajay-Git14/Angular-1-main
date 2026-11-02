# Chapter 05 — Dependency Injection and Services

**Learning flow:** Chapters → Topics → Subtopics → Execution  
**Project:** Existing Society Help Desk Angular 20.3 application  
**Content:** Two original topics and thirty syllabus-aligned executable labs, each with a separate guide.

| Topic | Labs | Core concepts |
| --- | ---: | --- |
| Dependency Injection | 15 | Constructor injection, inject(), injectors, tokens, root and component providers |
| Services and providers @Injectable | 15 | Injectable services, singleton scopes, shared state, in-memory CRUD, API boundary |

## Beginner setup

Open VS Code at the Angular-1 repository root and type:

    cd Angular/society-help-desk
    node --version
    npm install
    npm run test:lab
    npm run build
    npm start

Open http://localhost:4200/chapters/05.

## Four levels

    /chapters
       → /chapters/05
       → /chapters/05/dependency-injection
       → /chapters/05/dependency-injection/lab-7

Lab 7 uses two independently instantiated Angular child components. Their root counters share the same instance, while component-scoped counters are different.

## Start with these demonstrations

- Dependency Injection Lab 2 — Constructor injection versus inject()
- Dependency Injection Lab 7 — Component providers and instance isolation
- Dependency Injection Lab 10 — InjectionToken
- Services Lab 9 — Shared UserService between consumers
- Services Lab 11 — ComplaintService CRUD
- Services Lab 14 — API service boundary without a real HTTP request

## Working source

| File | Responsibility |
| --- | --- |
| src/main.ts | Chapter 05 dedicated route before the reading-only fallback |
| src/lab/course-catalog.ts | Two topics, thirty live subtopics and guide URLs |
| src/di/di-execution.ts | Real Angular inject(), constructor injection, provider recipes, event handlers |
| src/di/di-execution.html | 30 lab-specific live UI branches and output |
| src/di/di-services.ts | Root business services, scoped service, typed injection tokens |
| src/di/di-scope-panel.ts / .html | Independent child providers and shared root counters |
| src/di/di-notes.ts | Source-derived code snippets, action, expected result and memory hooks |
| src/di/di-execution.css | Responsive learning lab styles |
| chapters/chapter-05/executions | Thirty lab-specific Markdown guides |
| scripts/lab-acceptance.test.mjs | Lab routing, provider and source-mapping checks |

## Learning boundaries

No personal credentials, real transactions, backend data or HTTP requests are involved. The API_URL example displays a fictitious configuration value only. Real network integration belongs to Chapter 06.

[Practice](PRACTICE.md) · [Student TODO](TODO.ts) · [Solution explanations](SOLUTION.md) · [All guides](executions/)

**Quality:** Source written and checked structurally; a passing local Angular compiler build and browser smoke test remain mandatory before calling the code runtime-verified.

