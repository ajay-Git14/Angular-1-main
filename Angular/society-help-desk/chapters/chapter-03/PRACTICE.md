# Chapter 03 — Beginner-Friendly Guided Practice


> **Updated navigation (4 levels):** Open /chapters → Chapter 03 → one of the five original topics → a subtopic such as ngClass → the execution/detail page. The older /lab three-card route used in the exercises below remains available for comparison. Canonical ngClass URL: /chapters/03/attribute-directives/ngclass.


**Goal:** Learn by operating a three-screen Angular lab in the same Society Help Desk project. Follow the path category → topic → live effect.

## 1. Start the application

In the VS Code terminal, from Angular-1 repository root:

    cd Angular/society-help-desk
    node --version
    npm install
    npm run test:lab
    npm run build
    npm start

Browse to http://localhost:4200/. Angular 20.3 requires a compatible Node version: see https://angular.dev/reference/versions.

## 2. Try each category

1. **Directives:** Click Directives, choose ngClass, click Toggle High priority. Observe that the complaint card changes color and status. Also try @for, clear the list, and observe its empty state.
2. **Pipes:** Click Pipes, choose Currency, switch INR ↔ USD. Currency formatting changes but the amount is NOT converted using an FX rate. Try the custom Status Label pipe.
3. **Animations:** Click Animations, choose animate.leave, dismiss the notice and observe the fade-out. Try Slide and Stagger as well. Reduced-motion settings may shorten animations.
4. **Existing app:** Visit /dashboard and confirm the Society Help Desk project still works.

## 3. Follow the source

Open these files in society-help-desk/src/lab:

- lab-home.html: Screen 1, three cards.
- lab-category.html: Screen 2, category topic listing.
- lab-demo.html: Screen 3, the output implementation for each topic.
- lab-demo.ts: click handlers and Angular signals.
- lab-directives.ts: HostListener, Renderer2, HostBinding custom directives.
- lab-status.pipe.ts: custom pure pipe.
- lab.css: CSS transitions and enter/leave animations.

## 4. Student TODOs

- Foundation: Change the ngClass priority label, keeping its behavior working.
- Applied: Add a fictitious complaint in the @for demo and give it a stable tracking ID.
- Interview: Explain why a directive differs from a pipe, using live examples.
- Challenge: Add a new pipe to src/lab and connect a catalogue item, an implementation case and a test.

Do not edit TODO.ts as if it were imported app source. Make changes in the actual src/lab files.

## 5. Evidence and completion

- [ ] Three category cards appear at /lab.
- [ ] Category lists show 8, 10, and 8 lessons.
- [ ] At least one demo from every group responds to input.
- [ ] Browser back navigation and reset work.
- [ ] npm run test:lab succeeds.
- [ ] npm run build succeeds.
- [ ] Original Dashboard and New Complaint remain functional.
- [ ] Screenshots capture one before/after change and the terminal build result.

**Troubleshooting:** If the code is missing, save local work then use git pull origin main from repository root. If port 4200 is busy, use npx ng serve --port 4300 from society-help-desk.

