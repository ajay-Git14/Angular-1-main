# Lab 6: Lazy Load Feature — Live Angular Lazy Loading

**Chapter:** 07 Routing and Navigation · **Topic:** Lazy Loading  
**Original lesson:** [Techlambda Lazy Loading](https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/5.%20Lazy%20loading.md)  
**Fourth-level execution:** `/chapters/07/lazy-loading/lab-6`

## Learning problem and objective

Chapter 07 · Lazy loading · Lazy Load Feature. This is a real Angular routing demonstration connected to the numbered syllabus exercise.

A large Society Help Desk app shouldn't ship its entire Reports/Admin feature upfront if a user never opens it. This lesson illustrates real Angular route-level dynamic imports.

## Memory hook and analogy

**Load later, not at initial startup; verify by inspecting the JS chunk.**

Think of lazy loading like a library fetching a book only when someone requests it. The route exists in the catalogue, but the feature's JavaScript is loaded when needed.

## Practical (actual Angular project)

From the Angular-1 repository root:

~~~powershell
git pull origin main
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

Visit **http://localhost:4200/chapters/07/lazy-loading/lab-6**.

**Action:** Open the loadChildren feature route, then navigate to its nested lazily imported detail component.

**Expected:** Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.

Open DevTools → Network → JS before clicking the lazy link, disable cache and compare chunk requests. Refresh your page on the chapter route and visit the destination again.

## Original syllabus teaching snippet

~~~typescript
{

path:'reports',

loadChildren:() =>

import(

'./reports/reports.routes'

)

.then(

m => m.routes

)

}
~~~

## Actual runnable source

- [Router: loadComponent and loadChildren](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/main.ts)
- [Lazily imported component](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-lazy-report.ts)
- [Lazily imported route configuration](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-lazy.routes.ts)
- [Nested lazily imported detail](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-lazy-detail.ts)
- [Fourth-level Angular component](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-execution.ts)

**Implementation note:** The Chapter 07 execution page itself uses `loadComponent`. The separate Reports sample also uses `loadComponent`, and the nested Feature sample uses `loadChildren` to dynamically fetch its route configuration. A second nested `loadComponent` demonstrates two-stage lazy imports.

## Trade-offs, troubleshooting and validation

- Lazy loading improves initial work when the feature is not immediately needed. It adds a later chunk fetch; do not assert savings without measurement.
- **No chunk request visible?** Disable DevTools cache, try a private window and verify the route is loaded via a dynamic import.
- **Blank feature?** Inspect the correct exported component class / routes array and nested router-outlet.
- **Preloading:** Route preload strategies can load code ahead of navigation; inspect configuration before interpreting measurements.

## Assignment / Evidence / Interview

- [ ] Open the chapter lab then load the actual Reports or nested Feature route.
- [ ] Record the rendered feature and Network JS chunk activity.
- [ ] Show `loadComponent` or `loadChildren` source line.
- [ ] Run npm run test:lab and npm run build locally.
- [ ] Explain why `import()` creates a lazy boundary; compare with eager component import.
- [ ] Challenge: Add a sample Settings feature behind a lazy route and collect before/after bundle evidence.

**Definition of done:** Real dynamic import, visible feature component, explainable navigation and passing local tests/build.

**Safety:** All lab data is fictional; there is no real login or network backend.
