# Chapter 04 — Solution and Working Code Map

Chapter 04 reuses the SAME Society Help Desk Angular project rather than creating an unrelated Forms app.

## Working code
- [Forms component class](../../src/forms/forms-lab.ts)
- [Forms execution HTML](../../src/forms/forms-lab.html)
- [Forms styles](../../src/forms/forms-lab.css)
- [Lab-specific explanations](../../src/forms/forms-lab-notes.ts)
- [Four-level catalog](../../src/lab/course-catalog.ts)
- [Routing](../../src/main.ts)
- [Test suite](../../scripts/lab-acceptance.test.mjs)

## Explaining the six lessons

Forms: Browser input controls and native submit events trigger local component logic.

User Input: Different controls and key/input/change events update component state. File selection shows filename only.

Template-driven: FormsModule + ngModel synchronize fields and ngForm reports state/validity and ngSubmit.

Reactive: Explicit FormControl/FormGroup model with validators, setValue(), patchValue(), valueChanges and FormArray.

Validation: Angular validators prevent invalid submission and display clear required/format/cross-field messages.

Dynamic: Metadata describes variable question lists while FormRecord and FormArray own live controls and @for/@switch displays them.

## Verification before accepting

Use the 113 individual guides in executions/ for each lab's source excerpt, expected result and local run steps. Run npm run test:lab, npm run build and the browser acceptance checklist on a compatible Node installation.

**Curriculum correction:** Dynamic Forms was previously a copy of Form Validation. Its dedicated lesson now contains twenty real dynamic form exercises.

