# Chapter 04 — Guided Beginner-to-Professional Practice

## Setup
Open Angular-1 root in VS Code and execute:

    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

## Six progressive practicals

1. **Forms:** Open /chapters/04/forms/lab-1-first-form. Edit a resident name and description. Submit locally. Confirm the preview changes and the page does not reload.
2. **User Input:** Open /chapters/04/user-input/lab-16-keyup-event. Type and observe event details. Then open the attachment lab to choose a harmless file; verify only the filename appears.
3. **Template-driven:** Open /chapters/04/template-driven-forms/lab-1-first-template-driven-form. Change name/email; blur the field; explain touched, dirty, pristine and valid from ngModel/ngForm.
4. **Reactive Forms:** Open /chapters/04/reactive-forms/lab-1-first-formcontrol. Try setValue(), patchValue(), Add/Remove FormArray skill, and see the form values change.
5. **Validation:** Open /chapters/04/form-validation/lab-2-validation-message. Attempt blank, incorrect email/mobile/flat values and mismatched passwords. Fix inputs and verify valid submission.
6. **Dynamic Forms:** Open /chapters/04/dynamic-forms/lab-1-metadata-driven-form-problem-and-architecture. Add a question, toggle required, observe validation, remove it, and add a checklist item.

## Student assignments

- Foundation: explain one HTML input and one Angular ngModel binding.
- Applied: add a custom flat code validation rule and corresponding error display.
- Interview: compare template-driven and reactive forms, FormArray and FormRecord.
- Challenge: add a metadata question type and matching renderer, docs and regression test.

## Evidence checklist

- [ ] Four navigation screens demonstrated
- [ ] Representative interactive lab for each of six topics
- [ ] Valid/invalid form states captured
- [ ] Dynamic question add/remove validated
- [ ] Production build passed locally
- [ ] Earlier Chapter 03 and Society Help Desk dashboard still operate

**Reminder:** This learning lab does not persist data or upload files.

