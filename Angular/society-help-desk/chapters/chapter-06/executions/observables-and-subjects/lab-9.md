# Lab 9: Subject — Practical RxJS / Signals Execution

**Chapter:** 06 API Integration, RxJS and Signals  
**Topic:** Observables and Subjects  
**Lab:** Lab 9: Subject  
**Route:** `/chapters/06/observables-and-subjects/lab-9`  
**Source:** [Original syllabus file](https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/4.%20Observables%20and%20Subjects.md)

## Problem, objectives, and analogy

Observables and Subjects — Subject. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.

**Memory hook:** Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.

The Society Help Desk uses fictitious complaints, employees and notifications to demonstrate reactive data flow. RxJS streams model values arriving over time; signals hold values that Angular can reactively display.

## 5W+H and beginner explanation

**What:** Subject.  
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

3. Visit **http://localhost:4200/chapters/06/observables-and-subjects/lab-9**.
4. **Action:** Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.
5. **Expected effect:** Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.
6. Reset and repeat. In the browser, explain which data changes and why.

## Course code excerpt

From this specific numbered syllabus lab. The snippet may be pedagogical or partial; run the integrated source instead.

~~~typescript
subject.subscribe(

value => {

console.log(
'User A',
value
);

}

);

subject.subscribe(

value => {

console.log(
'User B',
value
);

}

);
~~~

## Working source (not a mockup)

- [Execution component and live reactive methods](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.ts)
- [Interactive Angular template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.html)
- [Source-aligned lab notes](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-notes.ts)
- [Shared state and BehaviorSubject service](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-store.ts)

Related labs reuse the same topic-level engine; the selected route determines the operator or signal operation where relevant. Inspect `runRxLab()`, `runObservableLab()` or `runSignalLab()`, and identify the operation for this lab's number.

## Worked scenario and trade-off

Compare RxJS Observable subscriptions with Subjects and Angular signals. Observables model streams, Subjects multicast, and signals model reactive current state.

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
