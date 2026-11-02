# Chapter 04 — Angular Forms

**Flow:** Chapters → Topics → Subtopics → Execution  
**Project:** Existing Society Help Desk Angular 20.3 workspace  
**Coverage:** Six topics, 113 source-aligned labs, 113 individual execution guides

## Six original topics

| Topic | Labs | Runnable demonstration |
| --- | ---: | --- |
| Forms | 15 | Native form controls and submit |
| User Input | 20 | Text, email, password, checkbox, radio, date, file selection and events |
| Template-driven Forms | 19 | FormsModule, ngForm, ngModel and control state |
| Reactive Forms | 19 | FormBuilder, FormControl, FormGroup, FormArray, valueChanges |
| Form Validation | 20 | Required, min/max, email, pattern, custom flat and cross-field validation |
| Dynamic Forms | 20 | Metadata → FormRecord → generated fields, required toggles and local preview |
| **Total** | **113** | Shared angular source with topic-specific notes and results |

## Getting started — Windows PowerShell

From the Angular-1 repository root, use a supported Node version:

    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

Browse to http://localhost:4200, select Chapter 04, then one of the six topics and a numbered lab.

## Chapter 04 execution-routing fix

[Fix for an incorrect 'not yet implemented' screen](../../CHAPTER-04-ROUTE-FIX.md). Update local main, stop any old ng serve process, then restart and open the full lab execution URL.

## Four levels

1. /chapters — 11 original Angular chapters
2. /chapters/04 — Chapter 04, six topics
3. /chapters/04/template-driven-forms — subtopic list with 19 labs
4. /chapters/04/template-driven-forms/lab-1-first-template-driven-form — live execution

**Other examples:**
- /chapters/04/forms/lab-1-first-form
- /chapters/04/user-input/lab-16-keyup-event
- /chapters/04/reactive-forms/lab-1-first-formcontrol
- /chapters/04/form-validation/lab-2-validation-message
- /chapters/04/dynamic-forms/lab-1-metadata-driven-form-problem-and-architecture

## Working source

| File | Responsibility |
| --- | --- |
| src/forms/forms-lab.ts | Standalone Angular component and state management |
| src/forms/forms-lab.html | Live inputs, validation, generated controls and expected output |
| src/forms/forms-lab.css | Responsive accessible layout |
| src/forms/forms-lab-notes.ts | 113 source-aligned explanations/snippets |
| src/lab/course-catalog.ts | Four-level navigation and 113 live lab links |
| src/main.ts | Chapter 04 route before generic Chapter 03 execution route |
| chapters/chapter-04/executions | One detail Markdown file per lab |
| scripts/lab-acceptance.test.mjs | Static regression and lab mapping checks |

## Important syllabus correction

The original 6. Dynamic Forms.md duplicated 5. Form Validation.md. The new dedicated Dynamic Forms lesson now teaches twenty metadata-driven form labs. Validation Topic 5 is unchanged.

## Delivery boundaries

No real data is sent to a server. Login/password examples are local and omit passwords from displayed preview; file inputs only show filenames. Browser-side validation is not a substitute for server-side validation.

**Verification:** A successful Angular compiler build and browser walkthrough must be completed on a supported local workstation before marking the runnable implementation 10/10.

[Practice](PRACTICE.md) · [Student TODO](TODO.ts) · [Solution](SOLUTION.md) · [113 execution guides](executions/)

