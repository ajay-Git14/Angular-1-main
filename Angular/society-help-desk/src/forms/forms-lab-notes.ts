/** Chapter 04 lab-specific explanations extracted from the numbered Markdown lessons.
 * These examples explain the source, while forms-lab.ts/html contain the actual
 * Angular 20.3 implementation. No demo sends data to a backend.
 */
export interface FormsLabNote {
 readonly labNumber:number;
 readonly focus:string;
 readonly action:string;
 readonly explanation:string;
 readonly expected:string;
 readonly hook:string;
 readonly snippet:string;
}
export const FORMS_LAB_NOTES: Readonly<Record<string, Readonly<Record<string, FormsLabNote>>>> = {
  "forms": {
    "lab-1-first-form": {
      "labNumber": 1,
      "focus": "Lab 1: First Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 1: First Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\ntype=\"text\">\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-2-user-registration-form": {
      "labNumber": 2,
      "focus": "Lab 2: User Registration Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 2: User Registration Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Name\">\n\n<input\n\nplaceholder=\"Email\">\n\n<button>\n\nRegister\n\n</button>\n\n</form>"
    },
    "lab-3-complaint-registration-form": {
      "labNumber": 3,
      "focus": "Lab 3: Complaint Registration Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 3: Complaint Registration Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Complaint Title\">\n\n<textarea>\n\n</textarea>\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-4-login-form": {
      "labNumber": 4,
      "focus": "Lab 4: Login Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 4: Login Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Email\">\n\n<input\n\ntype=\"password\">\n\n<button>\n\nLogin\n\n</button>\n\n</form>"
    },
    "lab-5-employee-registration-form": {
      "labNumber": 5,
      "focus": "Lab 5: Employee Registration Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 5: Employee Registration Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Employee Name\">\n\n<input\n\nplaceholder=\"Department\">\n\n<button>\n\nSave\n\n</button>\n\n</form>"
    },
    "lab-6-textbox": {
      "labNumber": 6,
      "focus": "Lab 6: Textbox",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 6: Textbox builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<input\n\ntype=\"text\">"
    },
    "lab-7-textarea": {
      "labNumber": 7,
      "focus": "Lab 7: Textarea",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 7: Textarea builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<textarea>\n\n</textarea>"
    },
    "lab-8-dropdown": {
      "labNumber": 8,
      "focus": "Lab 8: Dropdown",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 8: Dropdown builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<select>\n\n<option>\n\nAngular\n\n</option>\n\n<option>\n\nReact\n\n</option>\n\n</select>"
    },
    "lab-9-checkbox": {
      "labNumber": 9,
      "focus": "Lab 9: Checkbox",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 9: Checkbox builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<input\n\ntype=\"checkbox\">"
    },
    "lab-10-radio-button": {
      "labNumber": 10,
      "focus": "Lab 10: Radio Button",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 10: Radio Button builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<input\n\ntype=\"radio\">"
    },
    "lab-11-submit-event": {
      "labNumber": 11,
      "focus": "Lab 11: Submit Event",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 11: Submit Event builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form\n\n(submit)=\"save()\">\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Lab 12 — Society Complaint Example",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 12 — Society Complaint Example builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Resident Name\">\n\n<input\n\nplaceholder=\"Flat Number\">\n\n<input\n\nplaceholder=\"Complaint Title\">\n\n<textarea>\n\n</textarea>\n\n<button>\n\nRegister Complaint\n\n</button>\n\n</form>"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Lab 13 — Employee Onboarding Example",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 13 — Employee Onboarding Example builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Employee Name\">\n\n<input\n\nplaceholder=\"Employee Code\">\n\n<select>\n\n<option>\n\nDeveloper\n\n</option>\n\n<option>\n\nTester\n\n</option>\n\n</select>\n\n<button>\n\nCreate Employee\n\n</button>\n\n</form>"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Lab 14 — Student Registration Example",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 14 — Student Registration Example builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Student Name\">\n\n<input\n\nplaceholder=\"Course\">\n\n<button>\n\nEnroll\n\n</button>\n\n</form>"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Lab 15 — Dashboard Search Form",
      "action": "Enter or change the relevant native form control, submit locally, and inspect the generated preview.",
      "explanation": "Lab 15 — Dashboard Search Form builds on Forms in the Society Help Desk example. This lab teaches the browser's input and submission flow.",
      "expected": "Input values update immediately in the preview; the submit button triggers only a local form action.",
      "hook": "Form = input desk → data → submit.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Search Complaint\">\n\n<button>\n\nSearch\n\n</button>\n\n</form>"
    }
  },
  "user-input": {
    "lab-1-text-input": {
      "labNumber": 1,
      "focus": "Lab 1: Text Input",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 1: Text Input builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "User Can Enter Text",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"text\"\n\nplaceholder=\"Enter Name\">"
    },
    "lab-2-capturing-text-input": {
      "labNumber": 2,
      "focus": "Lab 2: Capturing Text Input",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 2: Capturing Text Input builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Real-Time Data Capture",
      "hook": "Event in → component changes → output updates.",
      "snippet": "name = '';"
    },
    "lab-3-email-input": {
      "labNumber": 3,
      "focus": "Lab 3: Email Input",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 3: Email Input builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"email\"\n\nplaceholder=\"Enter Email\">"
    },
    "lab-4-password-input": {
      "labNumber": 4,
      "focus": "Lab 4: Password Input",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 4: Password Input builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Password Hidden",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"password\"\n\nplaceholder=\"Enter Password\">"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "Lab 5 — Textarea",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 5 — Textarea builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<textarea\n\nplaceholder=\"Enter Address\">\n\n</textarea>"
    },
    "lab-6-complaint-description": {
      "labNumber": 6,
      "focus": "Lab 6: Complaint Description",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 6: Complaint Description builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<textarea\n\nplaceholder=\"Complaint Description\">\n\n</textarea>"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Lab 7 — Checkbox",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 7 — Checkbox builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"checkbox\">"
    },
    "lab-8-terms-acceptance": {
      "labNumber": 8,
      "focus": "Lab 8: Terms Acceptance",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 8: Terms Acceptance builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<label>\n\n<input\n\ntype=\"checkbox\">\n\nAccept Terms\n\n</label>"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "Lab 9 — Radio Button",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 9 — Radio Button builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"radio\"\n\nname=\"gender\">\n\nMale\n\n<input\n\ntype=\"radio\"\n\nname=\"gender\">\n\nFemale"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "Lab 10 — Dropdown",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 10 — Dropdown builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<select>\n\n<option>\n\nAngular\n\n</option>\n\n<option>\n\nReact\n\n</option>\n\n<option>\n\nVue\n\n</option>\n\n</select>"
    },
    "lab-11-complaint-category": {
      "labNumber": 11,
      "focus": "Lab 11: Complaint Category",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 11: Complaint Category builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<select>\n\n<option>\n\nWater Issue\n\n</option>\n\n<option>\n\nSecurity Issue\n\n</option>\n\n<option>\n\nParking Issue\n\n</option>\n\n</select>"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Lab 12 — Date Input",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 12 — Date Input builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"date\">"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Lab 13 — File Upload",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 13 — File Upload builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"file\">"
    },
    "lab-14-complaint-attachment": {
      "labNumber": 14,
      "focus": "Lab 14: Complaint Attachment",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 14: Complaint Attachment builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\ntype=\"file\">\n\n<button>\n\nUpload\n\n</button>"
    },
    "lab-15-input-event": {
      "labNumber": 15,
      "focus": "Lab 15: Input Event",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 15: Input Event builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\n(input)=\"captureData()\">"
    },
    "lab-16-keyup-event": {
      "labNumber": 16,
      "focus": "Lab 16: Keyup Event",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 16: Keyup Event builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<input\n\n(keyup)=\"search()\">"
    },
    "lab-17-change-event": {
      "labNumber": 17,
      "focus": "Lab 17: Change Event",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 17: Change Event builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<select\n\n(change)=\"courseChanged()\">\n\n</select>"
    },
    "lab-18": {
      "labNumber": 18,
      "focus": "Lab 18 — Society Complaint Registration Example",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 18 — Society Complaint Registration Example builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Resident Name\">\n\n<input\n\nplaceholder=\"Flat Number\">\n\n<select>\n\n<option>\n\nWater Issue\n\n</option>\n\n<option>\n\nParking Issue\n\n</option>\n\n</select>\n\n<textarea\n\nplaceholder=\"Complaint Details\">\n\n</textarea>\n\n<input\n\ntype=\"file\">\n\n<button>\n\nRegister Complaint\n\n</button>\n\n</form>"
    },
    "lab-19": {
      "labNumber": 19,
      "focus": "Lab 19 — Employee Onboarding Example",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 19 — Employee Onboarding Example builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Employee Name\">\n\n<input\n\nplaceholder=\"Email\">\n\n<input\n\ntype=\"date\">\n\n<select>\n\n<option>\n\nDeveloper\n\n</option>\n\n<option>\n\nTester\n\n</option>\n\n</select>\n\n<button>\n\nCreate Employee\n\n</button>\n\n</form>"
    },
    "lab-20": {
      "labNumber": 20,
      "focus": "Lab 20 — Banking Application Example",
      "action": "Edit the focused input, select a value or choose a file and inspect the on-screen event output.",
      "explanation": "Lab 20 — Banking Application Example builds on User Input in the Society Help Desk example. This lab teaches how a specific input/event updates application state.",
      "expected": "Selected input type and Angular event outputs react immediately; no file is uploaded.",
      "hook": "Event in → component changes → output updates.",
      "snippet": "<form>\n\n<input\n\nplaceholder=\"Account Number\">\n\n<input\n\nplaceholder=\"Customer Name\">\n\n<input\n\ntype=\"file\">\n\n<button>\n\nSubmit KYC\n\n</button>\n\n</form>"
    }
  },
  "template-driven-forms": {
    "lab-1-first-template-driven-form": {
      "labNumber": 1,
      "focus": "Lab 1: First Template-Driven Form",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 1: First Template-Driven Form builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form>\n\n<input\n\nname=\"userName\"\n\nngModel>\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-2-register-ngform": {
      "labNumber": 2,
      "focus": "Lab 2: Register ngForm",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 2: Register ngForm builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#registerForm=\"ngForm\">\n\n</form>"
    },
    "lab-3-bind-user-name": {
      "labNumber": 3,
      "focus": "Lab 3: Bind User Name",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 3: Bind User Name builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"userName\"\n\nngModel>"
    },
    "lab-4-multiple-controls": {
      "labNumber": 4,
      "focus": "Lab 4: Multiple Controls",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 4: Multiple Controls builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#form=\"ngForm\">\n\n<input\n\nname=\"name\"\n\nngModel>\n\n<input\n\nname=\"email\"\n\nngModel>\n\n</form>"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "Lab 5 — Form Submission",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 5 — Form Submission builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#form=\"ngForm\"\n\n(ngSubmit)=\"save(form)\">\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-6": {
      "labNumber": 6,
      "focus": "Lab 6 — Touched",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 6 — Touched builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "true",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"name\"\n\nngModel\n\n#name=\"ngModel\">"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Lab 7 — Untouched",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 7 — Untouched builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "true",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "{{name.untouched}}"
    },
    "lab-8": {
      "labNumber": 8,
      "focus": "Lab 8 — Dirty",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 8 — Dirty builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "true",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "{{name.dirty}}"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "Lab 9 — Pristine",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 9 — Pristine builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "true",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "{{name.pristine}}"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "Lab 10 — Valid",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 10 — Valid builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"email\"\n\nrequired\n\nngModel\n\n#email=\"ngModel\">"
    },
    "lab-11": {
      "labNumber": 11,
      "focus": "Lab 11 — Invalid",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 11 — Invalid builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "{{email.invalid}}"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Lab 12 — Required Validation",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 12 — Required Validation builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"email\"\n\nrequired\n\nngModel>"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Lab 13 — Email Validation",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 13 — Email Validation builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"email\"\n\nemail\n\nngModel>"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Lab 14 — Minimum Length Validation",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 14 — Minimum Length Validation builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<input\n\nname=\"password\"\n\nminlength=\"6\"\n\nngModel>"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Lab 15 — Validation Message",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 15 — Validation Message builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "@if(email.invalid &&\n email.touched){\n\n<p>\n\nEmail Required\n\n</p>\n\n}"
    },
    "lab-16": {
      "labNumber": 16,
      "focus": "Lab 16 — Society Complaint Form",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 16 — Society Complaint Form builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#complaintForm=\"ngForm\">\n\n<input\n\nname=\"residentName\"\n\nrequired\n\nngModel>\n\n<input\n\nname=\"flatNumber\"\n\nrequired\n\nngModel>\n\n<textarea\n\nname=\"description\"\n\nrequired\n\nngModel>\n\n</textarea>\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-17": {
      "labNumber": 17,
      "focus": "Lab 17 — Employee Registration Form",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 17 — Employee Registration Form builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#employeeForm=\"ngForm\">\n\n<input\n\nname=\"employeeName\"\n\nrequired\n\nngModel>\n\n<input\n\nname=\"email\"\n\nemail\n\nngModel>\n\n<button>\n\nSave\n\n</button>\n\n</form>"
    },
    "lab-18": {
      "labNumber": 18,
      "focus": "Lab 18 — Student Enrollment Form",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 18 — Student Enrollment Form builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#studentForm=\"ngForm\">\n\n<input\n\nname=\"studentName\"\n\nrequired\n\nngModel>\n\n<input\n\nname=\"course\"\n\nrequired\n\nngModel>\n\n<button>\n\nEnroll\n\n</button>\n\n</form>"
    },
    "lab-19": {
      "labNumber": 19,
      "focus": "Lab 19 — Login Form",
      "action": "Edit name and email, blur a control to change touched state, and observe ngForm valid/dirty/pristine values.",
      "explanation": "Lab 19 — Login Form builds on Template-driven Forms in the Society Help Desk example. This lab uses FormsModule, ngModel, ngForm and state indicators.",
      "expected": "The ngForm and ngModel states update as the learner edits and blurs controls. Invalid forms cannot submit.",
      "hook": "Template builds the model; ngModel keeps it in sync.",
      "snippet": "<form\n\n#loginForm=\"ngForm\">\n\n<input\n\nname=\"email\"\n\nrequired\n\nemail\n\nngModel>\n\n<input\n\nname=\"password\"\n\nrequired\n\nngModel>\n\n<button>\n\nLogin\n\n</button>\n\n</form>"
    }
  },
  "reactive-forms": {
    "lab-1-first-formcontrol": {
      "labNumber": 1,
      "focus": "Lab 1: First FormControl",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 1: First FormControl builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "Real-Time Input Tracking",
      "hook": "Class owns the model; template observes it.",
      "snippet": "import {\n\nFormControl\n\n}\nfrom '@angular/forms';\n\nname =\n\nnew FormControl('');"
    },
    "lab-2-first-formgroup": {
      "labNumber": 2,
      "focus": "Lab 2: First FormGroup",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 2: First FormGroup builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "import {\n\nFormGroup,\n\nFormControl\n\n}\nfrom '@angular/forms';\n\nuserForm =\n\nnew FormGroup({\n\nname:\n\nnew FormControl(''),\n\nemail:\n\nnew FormControl('')\n\n});"
    },
    "lab-3": {
      "labNumber": 3,
      "focus": "Lab 3 — Reading Values",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 3 — Reading Values builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "{\n \"name\":\"Deepak\",\n \"email\":\"deepak@gmail.com\"\n}",
      "hook": "Class owns the model; template observes it.",
      "snippet": "save(){\n\nconsole.log(\n\nthis.userForm.value\n\n);\n\n}"
    },
    "lab-4": {
      "labNumber": 4,
      "focus": "Lab 4 — Form Submission",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 4 — Form Submission builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "<form\n\n[formGroup]=\"userForm\"\n\n(ngSubmit)=\"save()\">\n\n<button>\n\nSubmit\n\n</button>\n\n</form>"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "Lab 5 — setValue()",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 5 — setValue() builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "this.userForm.setValue({\n\nname:'Deepak',\n\nemail:'deepak@gmail.com'\n\n});"
    },
    "lab-6": {
      "labNumber": 6,
      "focus": "Lab 6 — patchValue()",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 6 — patchValue() builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "this.userForm.patchValue({\n\nname:'Deepak'\n\n});"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Lab 7 — FormBuilder",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 7 — FormBuilder builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "import {\n\nFormBuilder\n\n}\nfrom '@angular/forms';\n\nconstructor(\n\nprivate fb:\nFormBuilder\n\n){}"
    },
    "lab-8": {
      "labNumber": 8,
      "focus": "Lab 8 — FormBuilder",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 8 — FormBuilder builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "userForm =\n\nthis.fb.group({\n\nname:[''],\n\nemail:['']\n\n});"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "Lab 9 — Form Validation",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 9 — Form Validation builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "import {\n\nValidators\n\n}\nfrom '@angular/forms';\n\nuserForm =\n\nthis.fb.group({\n\nname:[\n\n'',\n\nValidators.required\n\n]\n\n});"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "Lab 10 — Validation Check",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 10 — Validation Check builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "true\n\nor\n\nfalse",
      "hook": "Class owns the model; template observes it.",
      "snippet": "this.userForm.valid"
    },
    "lab-11": {
      "labNumber": 11,
      "focus": "Lab 11 — valueChanges",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 11 — valueChanges builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "Real-Time Form Updates",
      "hook": "Class owns the model; template observes it.",
      "snippet": "this.userForm\n\n.valueChanges\n\n.subscribe(\n\nvalue => {\n\nconsole.log(value);\n\n}\n\n);"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Lab 12 — FormArray",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 12 — FormArray builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "import {\n\nFormArray\n\n}\nfrom '@angular/forms';"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Lab 13 — FormArray",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 13 — FormArray builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "skills =\n\nnew FormArray([\nnew FormControl('')\n]);"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Lab 14 — FormArray",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 14 — FormArray builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "addSkill(){\n\nthis.skills.push(\n\nnew FormControl('')\n\n);\n\n}"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Lab 15 — Society Complaint Form",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 15 — Society Complaint Form builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "complaintForm =\n\nthis.fb.group({\n\nresidentName:[''],\n\nflatNumber:[''],\n\ncomplaintTitle:[''],\n\ndescription:['']\n\n});"
    },
    "lab-16": {
      "labNumber": 16,
      "focus": "Lab 16 — Employee Registration Form",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 16 — Employee Registration Form builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "employeeForm =\n\nthis.fb.group({\n\nemployeeName:[''],\n\nemail:[''],\n\ndepartment:['']\n\n});"
    },
    "lab-17": {
      "labNumber": 17,
      "focus": "Lab 17 — Login Form",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 17 — Login Form builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "loginForm =\n\nthis.fb.group({\n\nemail:[''],\n\npassword:['']\n\n});"
    },
    "lab-18": {
      "labNumber": 18,
      "focus": "Lab 18 — Student Enrollment Form",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 18 — Student Enrollment Form builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "studentForm =\n\nthis.fb.group({\n\nstudentName:[''],\n\ncourse:['']\n\n});"
    },
    "lab-19": {
      "labNumber": 19,
      "focus": "Lab 19 — Dynamic Skills Form",
      "action": "Change typed controls, use setValue/patchValue, add a FormArray item, and observe the reactive form model.",
      "explanation": "Lab 19 — Dynamic Skills Form builds on Reactive Forms in the Society Help Desk example. This lab uses explicit FormControl/FormGroup and typed form state.",
      "expected": "FormControl, FormGroup and FormArray values update in the component; setValue/patchValue and submission have visible output.",
      "hook": "Class owns the model; template observes it.",
      "snippet": "employeeForm =\n\nthis.fb.group({\n\nemployeeName:[''],\n\nskills:\n\nthis.fb.array([])\n\n});"
    }
  },
  "form-validation": {
    "lab-1": {
      "labNumber": 1,
      "focus": "Lab 1 — Required Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 1 — Required Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "userForm = this.fb.group({\n\nname:[\n '',\n Validators.required\n]\n\n});"
    },
    "lab-2-validation-message": {
      "labNumber": 2,
      "focus": "Lab 2: Validation Message",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 2: Validation Message builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "@if(\n\nuserForm\n.get('name')\n?.errors?.['required']\n\n&&\n\nuserForm\n.get('name')\n?.touched\n\n){\n\n<p>\n\nName Is Required\n\n</p>\n\n}"
    },
    "lab-3": {
      "labNumber": 3,
      "focus": "Lab 3 — Min Length Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 3 — Min Length Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "password:[\n\n'',\n\n[\n Validators.required,\n Validators.minLength(6)\n]\n\n]"
    },
    "lab-4": {
      "labNumber": 4,
      "focus": "Lab 4 — Min Length Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 4 — Min Length Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "@if(\n\nuserForm\n.get('password')\n?.errors?.['minlength']\n\n){\n\n<p>\n\nMinimum 6 Characters Required\n\n</p>\n\n}"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "Lab 5 — Max Length Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 5 — Max Length Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "name:[\n\n'',\n\nValidators.maxLength(50)\n\n]"
    },
    "lab-6": {
      "labNumber": 6,
      "focus": "Lab 6 — Max Length Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 6 — Max Length Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "@if(\n\nuserForm\n.get('name')\n?.errors?.['maxlength']\n\n){\n\n<p>\n\nMaximum 50 Characters Allowed\n\n</p>\n\n}"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Lab 7 — Email Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 7 — Email Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "email:[\n\n'',\n\n[\n Validators.required,\n Validators.email\n]\n\n]"
    },
    "lab-8": {
      "labNumber": 8,
      "focus": "Lab 8 — Email Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 8 — Email Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "@if(\n\nuserForm\n.get('email')\n?.errors?.['email']\n\n){\n\n<p>\n\nInvalid Email Format\n\n</p>\n\n}"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "Lab 9 — Pattern Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 9 — Pattern Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "mobile:[\n\n'',\n\nValidators.pattern(\n\n'^[0-9]{10}$'\n\n)\n\n]"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "Lab 10 — Pattern Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 10 — Pattern Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "@if(\n\nuserForm\n.get('mobile')\n?.errors?.['pattern']\n\n){\n\n<p>\n\nInvalid Mobile Number\n\n</p>\n\n}"
    },
    "lab-11": {
      "labNumber": 11,
      "focus": "Lab 11 — Multiple Validation Rules",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 11 — Multiple Validation Rules builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "userName:[\n\n'',\n\n[\n\nValidators.required,\n\nValidators.minLength(3),\n\nValidators.maxLength(30)\n\n]\n\n]"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Lab 12 — Disable Submit Until Valid",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 12 — Disable Submit Until Valid builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Button Disabled Until Form Valid",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "<button\n\n[disabled]=\"\nuserForm.invalid\">\n\nSubmit\n\n</button>"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Lab 13 — Validation State Properties",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 13 — Validation State Properties builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "true\n\nor\n\nfalse",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "this.userForm.valid"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Lab 14 — Validation State Properties",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 14 — Validation State Properties builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "this.userForm.invalid"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Lab 15 — Validation State Properties",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 15 — Validation State Properties builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "this.userForm.touched"
    },
    "lab-16": {
      "labNumber": 16,
      "focus": "Lab 16 — Validation State Properties",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 16 — Validation State Properties builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "this.userForm.dirty"
    },
    "lab-17-create-validator": {
      "labNumber": 17,
      "focus": "Lab 17: Create Validator",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 17: Create Validator builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "import {\n\nAbstractControl\n\n}\nfrom '@angular/forms';\n\nexport function\nflatNumberValidator(\n\ncontrol:\nAbstractControl\n\n){\n\nconst value =\ncontrol.value;\n\nif(\n\nvalue &&\n!value.startsWith('A')\n\n){\n\nreturn {\n\ninvalidFlat:true\n\n};\n\n}\n\nreturn null;\n\n}"
    },
    "lab-18": {
      "labNumber": 18,
      "focus": "Lab 18 — Cross Field Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 18 — Cross Field Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "passwordMatchValidator(\ngroup:any\n){\n\nconst password =\n\ngroup.get(\n'password'\n)?.value;\n\nconst confirmPassword =\n\ngroup.get(\n'confirmPassword'\n)?.value;\n\nreturn password ===\nconfirmPassword\n\n?\n\nnull\n\n:\n\n{\n passwordMismatch:true\n};\n\n}"
    },
    "lab-19": {
      "labNumber": 19,
      "focus": "Lab 19 — Society Complaint Form Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 19 — Society Complaint Form Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "complaintForm =\n\nthis.fb.group({\n\nresidentName:[\n\n'',\n\nValidators.required\n\n],\n\nflatNumber:[\n\n'',\n\nValidators.required\n\n],\n\nmobile:[\n\n'',\n\nValidators.pattern(\n'^[0-9]{10}$'\n)\n\n],\n\ncomplaintTitle:[\n\n'',\n\nValidators.required\n\n]\n\n});"
    },
    "lab-20": {
      "labNumber": 20,
      "focus": "Lab 20 — Employee Registration Validation",
      "action": "Submit an incomplete form to see errors; then correct fields and compare valid/invalid status.",
      "explanation": "Lab 20 — Employee Registration Validation builds on Form Validation in the Society Help Desk example. This lab applies a rule or observes validation state.",
      "expected": "Required, length, email, mobile, custom flat and cross-field error messages reflect the form's current validity.",
      "hook": "Validator is a gate: valid data passes.",
      "snippet": "employeeForm =\n\nthis.fb.group({\n\nemployeeName:[\n\n'',\n\nValidators.required\n\n],\n\nemail:[\n\n'',\n\nValidators.email\n\n],\n\nemployeeCode:[\n\n'',\n\nValidators.required\n\n]\n\n});"
    }
  },
  "dynamic-forms": {
    "lab-1-metadata-driven-form-problem-and-architecture": {
      "labNumber": 1,
      "focus": "Lab 1: Metadata-driven Form Problem and Architecture",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 1: Metadata-driven Form Problem and Architecture builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "interface DynamicField { key: string; label: string; type: 'text' | 'select' | 'date' | 'textarea'; required: boolean; options?: readonly string[]; }"
    },
    "lab-2-define-a-field-schema-interface": {
      "labNumber": 2,
      "focus": "Lab 2: Define a Field Schema Interface",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 2: Define a Field Schema Interface builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "const field: DynamicField = { key:'resident', label:'Resident name', type:'text', required:true };"
    },
    "lab-3-create-a-textbox-question-metadata-object": {
      "labNumber": 3,
      "focus": "Lab 3: Create a Textbox Question Metadata Object",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 3: Create a Textbox Question Metadata Object builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "const resident = { key:'resident', label:'Resident name', type:'text', required:true };"
    },
    "lab-4-create-dropdown-options-in-metadata": {
      "labNumber": 4,
      "focus": "Lab 4: Create Dropdown Options in Metadata",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 4: Create Dropdown Options in Metadata builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "const category = { key:'category', label:'Category', type:'select', required:true, options:['Water','Lift','Parking'] };"
    },
    "lab-5-build-the-initial-form-schema-array": {
      "labNumber": 5,
      "focus": "Lab 5: Build the Initial Form Schema Array",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 5: Build the Initial Form Schema Array builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "const fields = signal<DynamicField[]>([resident, category]);"
    },
    "lab-6-render-controls-using-for-and-switch": {
      "labNumber": 6,
      "focus": "Lab 6: Render Controls using @for and @switch",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 6: Render Controls using @for and @switch builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "@for (field of fields(); track field.key) { @switch(field.type) { @case('text') { <input [formControlName]=\"field.key\" /> } } }"
    },
    "lab-7-create-a-formrecord-from-metadata": {
      "labNumber": 7,
      "focus": "Lab 7: Create a FormRecord from Metadata",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 7: Create a FormRecord from Metadata builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "const form = new FormRecord<FormControl<string>>({ resident: new FormControl('', { nonNullable:true }) });"
    },
    "lab-8-connect-formcontrolname-to-dynamic-keys": {
      "labNumber": 8,
      "focus": "Lab 8: Connect formControlName to Dynamic Keys",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 8: Connect formControlName to Dynamic Keys builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "<form [formGroup]=\"form\"><input formControlName=\"resident\" /></form>"
    },
    "lab-9-apply-validators-from-schema-metadata": {
      "labNumber": 9,
      "focus": "Lab 9: Apply Validators from Schema Metadata",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 9: Apply Validators from Schema Metadata builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "new FormControl('', { nonNullable:true, validators: Validators.required })"
    },
    "lab-10-show-dynamic-validation-messages": {
      "labNumber": 10,
      "focus": "Lab 10: Show Dynamic Validation Messages",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 10: Show Dynamic Validation Messages builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "@if (form.get(field.key)?.hasError('required') && form.get(field.key)?.touched) { <p>Required</p> }"
    },
    "lab-11-add-an-optional-field-at-runtime": {
      "labNumber": 11,
      "focus": "Lab 11: Add an Optional Field at Runtime",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 11: Add an Optional Field at Runtime builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "this.form.addControl('custom1', this.fb.nonNullable.control(''));"
    },
    "lab-12-remove-a-runtime-created-field": {
      "labNumber": 12,
      "focus": "Lab 12: Remove a Runtime-created Field",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 12: Remove a Runtime-created Field builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "this.form.removeControl('custom1');"
    },
    "lab-13-change-a-field-requirement-at-runtime": {
      "labNumber": 13,
      "focus": "Lab 13: Change a Field Requirement at Runtime",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 13: Change a Field Requirement at Runtime builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "control.setValidators(required ? Validators.required : []); control.updateValueAndValidity();"
    },
    "lab-14-build-a-conditional-parking-input": {
      "labNumber": 14,
      "focus": "Lab 14: Build a Conditional Parking Input",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 14: Build a Conditional Parking Input builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "@if(form.controls['category'].value === 'Parking') { <input formControlName=\"parkingSlot\" /> }"
    },
    "lab-15-build-a-date-input-from-metadata": {
      "labNumber": 15,
      "focus": "Lab 15: Build a Date Input from Metadata",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 15: Build a Date Input from Metadata builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "{ key:'date', label:'Visit date', type:'date', required:false }"
    },
    "lab-16-add-textarea-for-complaint-details": {
      "labNumber": 16,
      "focus": "Lab 16: Add Textarea for Complaint Details",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 16: Add Textarea for Complaint Details builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "{ key:'description', label:'Complaint details', type:'textarea', required:true }"
    },
    "lab-17-use-a-dynamic-formarray-for-checklist-items": {
      "labNumber": 17,
      "focus": "Lab 17: Use a Dynamic FormArray for Checklist Items",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 17: Use a Dynamic FormArray for Checklist Items builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "readonly checks = new FormArray<FormControl<string>>([new FormControl('', {nonNullable:true})]);"
    },
    "lab-18-patch-values-into-a-generated-form": {
      "labNumber": 18,
      "focus": "Lab 18: Patch Values into a Generated Form",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 18: Patch Values into a Generated Form builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "this.form.patchValue({ resident:'Aarav' });"
    },
    "lab-19-validate-and-preview-submission-without-a-backend": {
      "labNumber": 19,
      "focus": "Lab 19: Validate and Preview Submission without a Backend",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 19: Validate and Preview Submission without a Backend builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "this.form.markAllAsTouched(); if(this.form.valid) this.preview.set(this.form.getRawValue());"
    },
    "lab-20-reset-test-and-explain-dynamic-forms": {
      "labNumber": 20,
      "focus": "Lab 20: Reset, Test, and Explain Dynamic Forms",
      "action": "Add or remove a metadata-defined question, toggle required, and preview the generated FormRecord.",
      "explanation": "Lab 20: Reset, Test, and Explain Dynamic Forms builds on Dynamic Forms in the Society Help Desk example. This lab modifies a generated question schema and control state.",
      "expected": "The metadata-driven form changes its actual controls and validation; submitting only previews local data.",
      "hook": "Schema is the blueprint; FormRecord holds the controls.",
      "snippet": "this.form.reset(); this.preview.set(null);"
    }
  }
};
