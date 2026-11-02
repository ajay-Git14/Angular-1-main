# Chapter 05 — Guided Student Practice

From Angular-1 root, run npm install, npm run test:lab, npm run build and npm start inside Angular/society-help-desk.

## Practice 1: Two injection styles
Open /chapters/05/dependency-injection/lab-2. Verify that constructor injection and inject() access the same ComplaintService. Create a sample complaint; observe the shared list.

## Practice 2: Root and component scope
Open /chapters/05/dependency-injection/lab-7. Two child cards appear. Increment the root counter in card A: both cards update. Increment A's local counter: B does not update. Explain how Angular injector scopes differ.

## Practice 3: Tokens
Open /chapters/05/dependency-injection/lab-10, then 11 and 12. Inspect typed InjectionToken values and compare useValue, useClass, useExisting and useFactory.

## Practice 4: Business services
Open /chapters/05/services-and-providers-injectable/lab-11. Create, read, update and delete a fictional complaint. Then open lab 9 to demonstrate a shared user name.

## Practice 5: Service boundary
Open /chapters/05/services-and-providers-injectable/lab-14. Observe the dummy API URL. Verify no network request is made; Chapter 06 will cover actual HTTP.

## Assignments
- Foundation: draw Consumer → Injector → Service and explain a dependency.
- Applied: implement a maintenance-notice root service with a signal.
- Interview: explain hierarchy, provider recipe and differences between constructor and inject().
- Challenge: implement a new component-local provider and demonstrate isolated instance IDs.

## Evidence checklist
- [ ] Complete four-level navigation
- [ ] Demonstrate two root/local counters
- [ ] Capture source snippet and expected output
- [ ] Demonstrate complaint CRUD in injected service
- [ ] Run npm run test:lab and npm run build
- [ ] Check Chapter 03 and Chapter 04 were not affected

Use only fictional data.

