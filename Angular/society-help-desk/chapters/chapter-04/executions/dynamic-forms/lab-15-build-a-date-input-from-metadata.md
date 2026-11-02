# Chapter 04 · Dynamic Forms · Lab 15: Build a Date Input from Metadata

**Hierarchy:** Chapters → 04 Forms → Dynamic Forms → Lab 15: Build a Date Input from Metadata → **Execution**  
**Status:** Implemented using a reusable Angular 20.3 Forms demo in the existing Society Help Desk project; final build/browser verification is required.

## Problem / Objectives

Lab 15: Build a Date Input from Metadata builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.

**Memory hook:** Schema is the blueprint; FormRecord holds the controls.

## What, Why and Where

**What?** Lab 15: Build a Date Input from Metadata.  
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

2. Open **http://localhost:4200/chapters/04/dynamic-forms/lab-15-build-a-date-input-from-metadata**.
3. Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.
4. Compare the current value, state and visual feedback.
5. Click Reset and repeat with another input.

**Expected observable result:** The metadata-driven form changes its actual controls and validation; submitting only previews local data.

## Syllabus code (study excerpt)

The following excerpt comes from the original Chapter 04 topic lesson. It may be partial and needs the existing Angular component context to run.

~~~typescript
{ key:'date', label:'Visit date', type:'date', required:false }
~~~

## Actual executable source

- [Angular Forms component class](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.ts)
- [Interactive Angular Forms template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.html)
- [Focused lesson metadata](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab-notes.ts)
- [Original syllabus Markdown file](https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/6.%20Dynamic%20Forms.md)

Find the `dynamic-forms` branch in the execution template and identify the exact control, `formControlName`, Angular validator or schema operation used by the demo.

## Real project, trade-offs and best practices

A metadata-driven FormRecord supports fields that change at runtime. Keep schema and controls synchronized, use unique track keys, and validate both in the browser and on a real server.

## Troubleshooting

If a binding fails, confirm `ReactiveFormsModule` is listed in the standalone component's imports, the control exists in the FormGroup/FormRecord and its `formControlName` exactly matches the configured key. Avoid calling unimplemented APIs or pasting incomplete standalone snippets into the app.

## Interview / Exercise / Evidence

- **Interview:** Explain the value flow from user input to Angular form control to validation to live output.
- **Foundation:** Edit one field and describe its state.
- **Applied:** Add one related validation or dynamic control and explain its effect.
- **Challenge:** Test invalid and valid inputs and record the differences.
- **Evidence:** Before/after screenshot, test results and a two-minute source walkthrough.

**Definition of done:** The named demonstration responds to input, its result is clear, and `npm run build` succeeds locally. No persistence, account creation or actual file upload is promised.
