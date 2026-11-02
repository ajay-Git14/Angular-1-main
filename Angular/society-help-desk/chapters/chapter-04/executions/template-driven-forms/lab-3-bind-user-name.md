# Chapter 04 · Template-driven Forms · Lab 3: Bind User Name

**Hierarchy:** Chapters → 04 Forms → Template-driven Forms → Lab 3: Bind User Name → **Execution**  
**Status:** Connected to the real Angular Forms execution screen. This is a focused training exercise inside the shared Society Help Desk application, not a separate app.

## 1. Problem, Context, and Objectives

Lab 3: Bind User Name builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators. The learner should operate the example, explain the input-to-model flow and connect it to a practical society-management workflow.

**Memory hook:** Template builds the model; ngModel keeps it in sync.

## 2. Explain like a beginner

**What?** Lab 3: Bind User Name. **Why?** Forms let a resident enter data, Angular tracks values, and a submission handler checks whether the application should accept a local demo request. **Where?** The same reusable Society Help Desk course application.

## 3. The executable app

Open the repository in VS Code. From the repository root, run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

In your browser, visit:

**http://localhost:4200/chapters/04/template-driven-forms/lab-3-bind-user-name**

Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.

**Expected observable effect:** The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.

## 4. Code from the original syllabus lesson

This excerpt preserves the original Markdown course material. Some source snippets are partial and not intended to compile independently; see the *actual integrated implementation* below.

~~~typescript
<input

name="userName"

ngModel>
~~~

## 5. Actual implementation to trace

- [Focused Angular Forms execution class](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.ts)
- [Working template with native/Angular controls](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab.html)
- [Lab-specific explanation and expected output](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/forms/forms-lab-notes.ts)
- [Original Techlambda topic documentation](https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/3.%20Template-driven%20Forms.md)

**How to trace:** Find the `template-driven-forms` branch in `forms-lab.html`. Follow its control binding into `forms-lab.ts`. Observe how model and validation state appear in the live result panel.

## 6. Practical validation and evidence

1. Capture a screenshot *before* editing.
2. Follow the action above and observe the changed live result.
3. Explain how Angular receives the event/value.
4. Reset the demo and repeat, then compare results.
5. Run `npm run build` and capture the terminal outcome.
6. Present a two-minute walkthrough of the input, state and output.

## 7. Errors, Troubleshooting and Interview Readiness

**Common mistake:** Pasting an isolated HTML fragment without the Angular component or required `FormsModule`/`ReactiveFormsModule` import. **Fix:** Run the shared application and inspect the actual standalone component imports.

**Interview Q:** How does this exercise relate to a real Society Help Desk form?  
**Answer:** Lab 3: Bind User Name builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators. The example shows the interaction locally; production persistence, authentication and server-side validation are not implied.

**Mini assignment:** Extend this example by adding one related field or checking one additional state. Document input → handler → model → view → expected result.

**Definition of done:** An interactive example is visible, its expected output is reproducible and the Angular build completes without errors on the learner's machine.

**Safety and scope:** Do not enter real passwords, contact details or documents. No API or upload is performed by these learning examples.
