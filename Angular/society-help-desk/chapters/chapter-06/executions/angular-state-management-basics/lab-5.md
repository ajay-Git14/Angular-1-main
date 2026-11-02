# Lab 5: Society Complaint Example — Practical Angular Execution

**Chapter:** 06 API Integration, RxJS and Signals  
**Topic:** Angular State Management Basics  
**Source:** [Original course topic](https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/8.%20Angular%20State%20Management%20Basics.md)  
**Demo URL:** `http://localhost:4200/chapters/06/angular-state-management-basics/lab-5`

## Problem and objectives

Angular State Management Basics — Society Complaint Example. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.

**Memory hook:** Single source of truth: one store, many consumers.

A Society Help Desk dashboard needs data that stays synchronized. Source signals represent changing values; computed signals derive a total or ratio, effect() can record an observation, and a root store can share application state.

## Real-life analogy

Signals are cells in a spreadsheet. Computed values are formula cells: change an input, the result changes. An effect is a notification sent after a tracked input changes; the store is the team's single shared ledger.

## Five-minute live lab

1. Open the `Angular-1` repository in VS Code.
2. From the repository root run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

3. Open **http://localhost:4200/chapters/06/angular-state-management-basics/lab-5**.
4. **Action:** Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.
5. **Expected visual output:** Shared store state and selectors update; the loading/error/filtered data are visible.
6. Reset, repeat with a second value, and explain where Angular tracked the dependency.

## Original syllabus code excerpt

This is instructional source text for the named subtopic; it may not compile alone without the app's component context.

~~~typescript
@Injectable({

providedIn:'root'

})

export class ComplaintStore{

complaints =

signal([]);

}
~~~

## Inspect the real, commented implementation

- [Angular execution component](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.ts)
- [Live template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.html)
- [Root state store](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-store.ts)
- [Per-lab explanation and memory hook](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-notes.ts)

The Angular State Management Basics section in the HTML selects the real engine. Related labs share the same component and many visual controls; the Lab number determines the specific signal or store operation.

## Engineering and trade-offs

A root service creates a single source of truth through writable signals, computed selectors and optionally a BehaviorSubject for stream consumers. Keep UI input changes separate from backend persistence and authenticated state.

## Validation, evidence and viva

- [ ] Selected lab is a live Level 04 screen, not the generic reading fallback.
- [ ] The UI visibly responds to your changes.
- [ ] Identify source signal, dependency tracking and computed/effect or store consumer.
- [ ] Capture before/after output and source code with comments.
- [ ] Run production build and source acceptance tests locally.
- [ ] Explain what changes when this data is managed centrally versus inside one component.
- [ ] Complete a mini assignment: add one field or computed selector with an expected output.

**Common mistakes:** Calling a signal without parentheses in a template, trying to write to computed(), mutating signal arrays without updating signal state, or propagating derived state with effects.

**Definition of done:** Demonstrable live output, concept explained, tests/build pass and evidence supplied.

**Scope:** This is an in-memory training system, not authenticated or persistent production state.
