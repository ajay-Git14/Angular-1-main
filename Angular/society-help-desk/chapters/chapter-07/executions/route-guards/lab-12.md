# Lab 12: CanMatch — Chapter 07 Working Execution Guide

**Topic:** Route Guards  
**Path:** `/chapters/07/route-guards/lab-12`  
**Original syllabus:** [Read the source lesson](https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/4.%20Route%20Guards.md)

## Problem / Objective

Chapter 07 · Route Guards · CanMatch. This is a real Angular routing demonstration connected to the numbered syllabus exercise.

The student must reproduce an actual Angular route-guard decision rather than memorizing one code snippet.

## Beginner 5W+H and real-life analogy

A client-side route guard is like a reception desk checking a training access badge. The badge changes the UI route, but a real server must verify authentication and authorization.

**Memory hook:** Guard = a navigation checkpoint, never server authorization.

## Run the exact practical

In PowerShell, from the Angular-1 repository root:

~~~powershell
git pull origin main
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

Open **http://localhost:4200/chapters/07/route-guards/lab-12**.

**Action:** Try the admin route while signed out, then sign in and assign the admin demo role. Try again.

**Expected output:** CanMatch denies non-admin navigation with a reason and accepts the permitted demonstration role.

For CanDeactivate, edit the sample note, try leaving and choose Cancel; after saving, navigate normally. For CanMatch/CanActivate, compare signed-out and signed-in demo flags.

## Excerpt from original course

~~~typescript
{

path:'admin',

component:
AdminComponent,

canMatch:[

adminGuard

]

}
~~~

## Actual executable source

- [Router configuration and child branches](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/main.ts)
- [Fourth-level execution and events](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-execution.ts)
- [Real Angular page components](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-pages.ts)
- [Guard functions and fake session state](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-guards.ts)
- [Nested outlet and detail templates](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-portal.html)
- [Per-lab explanation metadata](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-notes.ts)

## Engineering decision and trade-offs

CanActivate and CanMatch address different routing phases. CanActivateChild applies checks to children, and CanDeactivate checks whether navigation away should proceed. Guards protect navigation only; the backend must enforce real authorization. Use UrlTree redirects to avoid imperative redirect side effects in guard evaluation.

## Validation / Troubleshooting / Interview

- [ ] Correct selected lab appears on the fourth-level screen.
- [ ] The actual Angular destination renders and changes in response to navigation.
- [ ] Capture the before/after URL and visible result.
- [ ] Explain the corresponding route configuration.
- [ ] Run `npm run test:lab` and `npm run build` successfully locally.
- [ ] **Interview question:** What problem does CanDeactivate/CanMatch solve?
- [ ] **Challenge:** Extend the example with a safe, fictional variation and document its expected output.

**Definition of done:** Running browser demonstration, source trace, code comments and reproducible evidence.

**Warning:** UI session flags are intentionally fake; this cannot secure an API.
