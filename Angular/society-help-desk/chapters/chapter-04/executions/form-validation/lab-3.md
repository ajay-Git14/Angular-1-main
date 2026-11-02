# Chapter 04 · Form Validation · Lab 3 — Min Length Validation

**Hierarchy:** Chapters → 04 Forms → Form Validation → Lab 3 — Min Length Validation → **Execution**  
**Status:** Implemented using a reusable Angular 20.3 Forms demo in the existing Society Help Desk project; final build/browser verification is required.

## Problem / Objectives

Lab 3 — Min Length Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.

**Memory hook:** Validator is a gate: valid data passes.

## What, Why and Where

**What?** Lab 3 — Min Length Validation.  
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

2. Open **http://localhost:4200/chapters/04/form-validation/lab-3**.
3. Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.
4. Compare the current value, state and visual feedback.
5. Click Reset and repeat with another input.

**Expected observable result:** Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.

## Syllabus code (study excerpt)

The following excerpt comes from the original Chapter 04 topic lesson. It may be partial and needs the existing Angular component context to run.

~~~typescript
password:[

'',

[
 Validators.required,
 Validators.minLength(6)
]

]
~~~

## Actual executable source

- [Angular Forms component class](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.ts)
- [Interactive Angular Forms template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.html)
- [Focused lesson metadata](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab-notes.ts)
- [Original syllabus Markdown file](https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/5.%20Form%20Validation.md)

Find the `form-validation` branch in the execution template and identify the exact control, `formControlName`, Angular validator or schema operation used by the demo.

## Real project, trade-offs and best practices

Validation improves UI feedback but cannot replace server-side checks. Compare built-in required/email/pattern rules with custom flat codes and cross-field passwords.

## Troubleshooting

If a binding fails, confirm `ReactiveFormsModule` is listed in the standalone component's imports, the control exists in the FormGroup/FormRecord and its `formControlName` exactly matches the configured key. Avoid calling unimplemented APIs or pasting incomplete standalone snippets into the app.

## Interview / Exercise / Evidence

- **Interview:** Explain the value flow from user input to Angular form control to validation to live output.
- **Foundation:** Edit one field and describe its state.
- **Applied:** Add one related validation or dynamic control and explain its effect.
- **Challenge:** Test invalid and valid inputs and record the differences.
- **Evidence:** Before/after screenshot, test results and a two-minute source walkthrough.

**Definition of done:** The named demonstration responds to input, its result is clear, and `npm run build` succeeds locally. No persistence, account creation or actual file upload is promised.
