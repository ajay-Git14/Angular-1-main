# Lab 13: Child Route With Parameters — Chapter 07 Working Execution Guide

**Topic:** Child Routes  
**Path:** `/chapters/07/child-routes/lab-13`  
**Original syllabus:** [Read the source lesson](https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/3.%20Child%20Routes.md)

## Problem / Objective

Chapter 07 · Child Routes · Child Route With Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise.

The student must reproduce an actual Angular nested router-outlet navigation rather than memorizing one code snippet.

## Beginner 5W+H and real-life analogy

A parent route is a building; a child route is an office inside it. Angular keeps the building component while changing the office rendered in its router-outlet.

**Memory hook:** Parent stays; child swaps inside a nested router-outlet.

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

Open **http://localhost:4200/chapters/07/child-routes/lab-13**.

**Action:** Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.

**Expected output:** The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.

Navigate between portal links, compare parent and nested child content, and test the default child and the monthly second-level child.

## Excerpt from original course

~~~typescript
{

path:'complaints/:id',

component:
ComplaintDetailsComponent

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

Use nested routes when a consistent layout has multiple related screens. A child requires a parent router-outlet. A default child redirect needs pathMatch:'full' to avoid unwanted prefix matching. Use lazy loading when a nested feature is large enough to justify a separate chunk.

## Validation / Troubleshooting / Interview

- [ ] Correct selected lab appears on the fourth-level screen.
- [ ] The actual Angular destination renders and changes in response to navigation.
- [ ] Capture the before/after URL and visible result.
- [ ] Explain the corresponding route configuration.
- [ ] Run `npm run test:lab` and `npm run build` successfully locally.
- [ ] **Interview question:** What problem does a nested router-outlet solve?
- [ ] **Challenge:** Extend the example with a safe, fictional variation and document its expected output.

**Definition of done:** Running browser demonstration, source trace, code comments and reproducible evidence.

**Warning:** Nested URLs represent client routes, not new HTTP backend endpoints.
