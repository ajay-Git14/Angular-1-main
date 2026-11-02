# Chapter 04 · Reactive Forms · Lab 1: First FormControl

**Hierarchy:** Chapters → 04 Forms → Reactive Forms → Lab 1: First FormControl → **Execution**  
**Status:** Implemented using a reusable Angular 20.3 Forms demo in the existing Society Help Desk project; final build/browser verification is required.

## Problem / Objectives

Lab 1: First FormControl builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.

**Memory hook:** Class owns the model; template observes it.

## What, Why and Where

**What?** Lab 1: First FormControl.  
**Why?** Form state or validation should be explicit, observable and explainable.  
**Where?** A fictitious Society Help Desk complaint form—no real user accounts or backend calls.

## Live lab (beginner instructions)

1. Open the Angular-1 repository in VS Code and run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

2. Open **http://localhost:4200/chapters/04/reactive-forms/lab-1-first-formcontrol**.
3. Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.
4. Compare the current value, state and visual feedback.
5. Click Reset and repeat with another input.

**Expected observable result:** Real-Time Input Tracking

## Syllabus code (study excerpt)

The following excerpt comes from the original Chapter 04 topic lesson. It may be partial and needs the existing Angular component context to run.

~~~typescript
import {

FormControl

}
from '@angular/forms';

name =

new FormControl('');
~~~

## Actual executable source

- [Angular Forms component class](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.ts)
- [Interactive Angular Forms template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.html)
- [Focused lesson metadata](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab-notes.ts)
- [Original syllabus Markdown file](https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/4.%20Reactive%20Forms.md)

Find the `reactive-forms` branch in the execution template and identify the exact control, `formControlName`, Angular validator or schema operation used by the demo.

## Real project, trade-offs and best practices

Reactive forms keep a typed, explicit control model in the component class. Choose FormControl for one value, FormGroup for a set, FormArray for repeated controls, and setValue or patchValue deliberately.

## Troubleshooting

If a binding fails, confirm `ReactiveFormsModule` is listed in the standalone component's imports, the control exists in the FormGroup/FormRecord and its `formControlName` exactly matches the configured key. Avoid calling unimplemented APIs or pasting incomplete standalone snippets into the app.

## Interview / Exercise / Evidence

- **Interview:** Explain the value flow from user input to Angular form control to validation to live output.
- **Foundation:** Edit one field and describe its state.
- **Applied:** Add one related validation or dynamic control and explain its effect.
- **Challenge:** Test invalid and valid inputs and record the differences.
- **Evidence:** Before/after screenshot, test results and a two-minute source walkthrough.

**Definition of done:** The named demonstration responds to input, its result is clear, and `npm run build` succeeds locally. No persistence, account creation or actual file upload is promised.
