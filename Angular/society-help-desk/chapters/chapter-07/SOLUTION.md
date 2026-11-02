# Chapter 07 — Solution and Interview Explanation

Actual code is in the existing Society Help Desk application.

## Routing

Root Routes in src/main.ts map URL segments to a component or dynamic import. RouterLink and Router.navigate change SPA routes; RouterLinkActive styles matching anchors; router-outlet renders the selected view.

## Route Parameters

RoutingParameterViewer in src/routing/routing-pages.ts uses a one-time snapshot read and reactive toSignal(route.paramMap/queryParamMap). Select Employee 101 and 102 to compare values.

## Child Routes

RoutingPortal is a parent with nested router-outlet, and the Reports section has a second nested outlet for Monthly. A default child redirects to Complaints.

## Guards

The examples use real CanActivateFn, CanMatchFn, CanActivateChildFn and CanDeactivateFn defined in src/routing/routing-guards.ts. All signed-in/role state is FAKE. Server APIs must enforce real authentication and authorization.

## Lazy Loading

The Chapter 07 execution view and sample Reports use loadComponent with dynamic import. The feature route uses loadChildren, and its nested detail uses a second loadComponent. Confirm code splitting via Angular build and Network JS chunks.

## Memory hooks

- Routing: URL → Route match → Component → router-outlet.
- Params: snapshot is a photograph; paramMap is a video stream.
- Child: Parent remains; child changes.
- Guard: Navigation checkpoint, never server security.
- Lazy: Load the feature only when requested.

## Definition of Done

Use the individual execution guides in executions/, show at least one live result per topic, run npm run test:lab and npm run build, and capture code, browser screenshots and chunk evidence.

