# Lab 10: mergeMap() — Practical RxJS / Signals Execution

**Chapter:** 06 API Integration, RxJS and Signals  
**Topic:** RxJS fundamentals  
**Lab:** Lab 10: mergeMap()  
**Route:** `/chapters/06/rxjs-fundamentals/lab-10`  
**Source:** [Original syllabus file](https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/3.%20RxJS%20fundamentals.md)

## Problem, objectives, and analogy

RxJS fundamentals — mergeMap(). This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.

**Memory hook:** Source → pipe/operators → subscriber → output.

The Society Help Desk uses fictitious complaints, employees and notifications to demonstrate reactive data flow. RxJS streams model values arriving over time; signals hold values that Angular can reactively display.

## 5W+H and beginner explanation

**What:** mergeMap().  
**Why:** Understand how a value enters, changes or is published by the application.  
**Where:** In the shared Society Help Desk app, not a separate project.  
**How:** Run the instructions below, interact and compare input with output.

## Execute the actual Angular implementation

1. In VS Code, open the Angular-1 repository root.
2. Run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

3. Visit **http://localhost:4200/chapters/06/rxjs-fundamentals/lab-10**.
4. **Action:** Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.
5. **Expected effect:** Values emitted to the subscriber match the selected RxJS operator; the stream completes.
6. Reset and repeat. In the browser, explain which data changes and why.

## Course code excerpt

From this specific numbered syllabus lab. The snippet may be pedagogical or partial; run the integrated source instead.

~~~typescript
orders$

.pipe(

mergeMap(

order =>

this.http.post(

'/api/order',

order

)

)

);
~~~

## Working source (not a mockup)

- [Execution component and live reactive methods](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.ts)
- [Interactive Angular template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.html)
- [Source-aligned lab notes](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-notes.ts)
- [Shared state and BehaviorSubject service](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-store.ts)

Related labs reuse the same topic-level engine; the selected route determines the operator or signal operation where relevant. Inspect `runRxLab()`, `runObservableLab()` or `runSignalLab()`, and identify the operation for this lab's number.

## Worked scenario and trade-off

Compare map (transform), filter (retain values), tap (observe without transforming), switchMap (latest request) and mergeMap (all concurrent work).

Avoid manual unbounded subscriptions in components. These examples use finite streams or Angular destroy-aware cleanup.

## Validation, evidence and interview questions

- [ ] Correct chapter/topic/lab appears and the page is not reading-only.
- [ ] An input or Run button produces an observable live effect.
- [ ] Identify the source, transformation and subscriber, or the signal read and update.
- [ ] Capture a before-and-after screenshot and the relevant code.
- [ ] Run `npm run build` and `npm run test:lab` successfully on your machine.
- [ ] Explain when RxJS is preferable to a writable signal in an interview.
- [ ] Extend the sample with one new data point or operator and explain its trade-off.

**Troubleshooting:** If no emissions appear, verify subscription, `next()` and completion. If signal output is unchanged, inspect the `set()` or `update()` expression and that the template reads `signal()`.

**Definition of done:** Concept demonstrated with live output, its source traced, and local build/test evidence recorded. No real personal data, network call or persistence is required.
