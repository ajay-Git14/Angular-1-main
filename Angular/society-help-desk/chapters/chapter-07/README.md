# Chapter 07 — Routing and Navigation

**Canonical flow:** Chapters → Topics → Subtopics → Execution
**Project:** Existing Society Help Desk Angular 20.3 application

| Original topic | Live lab routes | Actual API |
| --- | ---: | --- |
| Routing & Navigation | 15 | RouterLink, Router.navigate, default/wildcard |
| Route Parameters | 18 | ActivatedRoute, snapshot, paramMap, queryParamMap |
| Child Routes | 15 | Nested router-outlet, default and second-level child |
| Route Guards | 15 | CanActivateFn, CanMatchFn, CanActivateChildFn, CanDeactivateFn |
| Lazy loading | 15 | loadComponent, loadChildren, nested dynamic import |
| **Total** | **78** | Five real topic engines and 78 individual guides |

## Beginner setup

From the Angular-1 repository root:

    git switch main
    git pull --ff-only origin main
    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

Open http://localhost:4200/chapters/07.

## Four levels

    /chapters
      → /chapters/07
      → /chapters/07/route-parameters
      → /chapters/07/route-parameters/lab-13

Choose Employee 101, click Employee 102 and compare the snapshot with the live paramMap.

## First demonstrations

- /chapters/07/routing-and-navigation/lab-9 — Router.navigate
- /chapters/07/route-parameters/lab-13 — route parameter stream
- /chapters/07/child-routes/lab-10 — nested reports
- /chapters/07/route-guards/lab-7 — role-based route matching
- /chapters/07/route-guards/lab-10 — CanDeactivate
- /chapters/07/lazy-loading/lab-2 — lazy report component
- /chapters/07/lazy-loading/lab-6 — lazy route configuration

## Working sources

- src/main.ts: root routes, priorities, real guard functions, dynamic imports
- src/routing/routing-execution.ts and routing-execution.html: fourth-level course UI
- src/routing/routing-pages.ts: parameter screen, nested portal, guarded screens
- src/routing/routing-guards.ts: all four working route guard types
- src/routing/routing-lazy-report.ts and routing-lazy.routes.ts: real lazy loading
- src/routing/routing-notes.ts: 78 syllabus-specific notes and code excerpts
- chapters/chapter-07/executions/: 78 Markdown files
- scripts/lab-acceptance.test.mjs: regression tests

**Scope and safety:** Session and role flags are demonstrations, NOT real authentication. Client route guards cannot secure an API. Lazy chunks must be verified in DevTools and with an Angular production build, not by source claims alone.

[Practice](PRACTICE.md) · [Student TODO](TODO.ts) · [Worked Solution](SOLUTION.md) · [All execution guides](executions/)

