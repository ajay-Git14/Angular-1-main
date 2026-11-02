# Lab 11: Passing Data During Navigation — Working Angular Routing Lab

**Chapter:** 07 Routing and Navigation  
**Original topic:** Routing & Navigation  
**Four-level route:** `/chapters/07/routing-and-navigation/lab-11`  
**Published course source:** [Original lesson](https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/1.%20Routing%20%26%20Navigation.md)

## 1. Problem and context

Chapter 07 · Routing & Navigation · Passing Data During Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise.

**Objective:** Navigate the real Society Help Desk app, observe Angular's router behavior and explain which URL segment or query is driving the page.

## 2. 5W+H, beginner explanation and memory hook

**What:** Passing Data During Navigation. **Why:** Route handling maps a URL to a component while preserving single-page navigation. **Where:** In our single existing Angular 20.3 Society Help Desk app. **Who:** A resident, trainer or developer using fictitious lab URLs.

**Memory hook:** URL → route match → component → router-outlet.

**Analogy:** The Angular Router is the receptionist who reads an address and directs a visitor to the correct desk. Route params are the visitor's room number; query params are optional instructions.

## 3. Real practical — reproduce the result

From the `Angular-1` repository root:

~~~powershell
git pull origin main
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

Open **http://localhost:4200/chapters/07/routing-and-navigation/lab-11**.

**Action:** Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.

**Expected visible effect:** The browser URL changes and Angular renders the matched component without manually reloading the page.

Use the Back link on the destination screen to return to Chapter 07 and repeat the experiment with different values.

## 4. Published syllabus example

This excerpt is from the original source lesson, provided for explanation. It may be a short fragment rather than independently compilable code.

~~~typescript
this.router.navigate(

['/dashboard'],

{

queryParams:{

userId:1

}

}

);
~~~

## 5. Actual working source (do not scaffold another Angular app)

- [Fourth-level execution component](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-execution.ts)
- [Angular router configuration](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/main.ts)
- [Real child/parameter screens](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-pages.ts)
- [Interactive execution template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-execution.html)
- [Original lab note and expected effect](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/routing/routing-notes.ts)

Find the current topic engine in the fourth-level template, then trace `runSelected()` to the Router configuration and the actual destination component.

## 6. Engineering trade-offs and troubleshooting

- **Wrong page:** Check route ordering and the full URL.
- **Blank child route:** Ensure the parent has a nested `router-outlet`.
- **Stale ID:** Compare `snapshot.paramMap` (one-time) with `paramMap` (observable) when Angular reuses a component.
- **Not found:** The legacy app wildcard redirects to Chapters; this is intentional.
- **Security boundary:** Neither URL parameters nor route navigation alone prove a user's identity.

## 7. Validation, interview and evidence

- [ ] Level 04 page opens the correct live topic rather than the reading-only fallback.
- [ ] Clicking the appropriate navigation control changes the URL and displays the expected component.
- [ ] The observed URL and source code are explained in a two-minute walkthrough.
- [ ] Record a before/after screenshot and terminal `npm run build` result.
- [ ] **Interview question:** When would you prefer `routerLink` over programmatic `Router.navigate()`?
- [ ] **Applied assignment:** Add another fictitious route parameter or query filter and explain its lifecycle.

**Definition of done:** Practical executed, output explained, build/tests pass and evidence saved.

**Scope:** This is navigation training; no personal account, real API or backend authorization is performed.
