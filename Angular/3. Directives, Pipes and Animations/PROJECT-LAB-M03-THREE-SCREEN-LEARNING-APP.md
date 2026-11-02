# Module 03 — Interactive Three-Screen Angular Lab

> **NEW canonical flow:** Chapters → Topics → Subtopics → Execution. Go to /chapters and select Chapter 03 → one of five original syllabus topics → a live subtopic → its execution screen and individual detail guide. The three-screen /lab flow documented below is still available for compatibility. See [Chapter 03 start here](../society-help-desk/chapters/chapter-03/README.md).


**Connected project:** Society Help Desk, continuing Modules 01 and 02.  
**Audience:** Beginners to professional Angular learners.  
**Goal:** Choose a concept, open its types, manipulate controls and see the real effect.

## 1. Problem and story
Our resident Aarav can memorize that a pipe formats data, but he cannot explain how a UI changes. The lab demonstrates concepts using sample Society Help Desk complaints. Every topic has a control, a live output, source code, an expected result and a memory hook.

**Analogy:** Directives instruct the stage; Pipes format the presentation; Animations control how actors enter, leave or move.

## 2. Three-screen architecture

    Browser -> /lab
      |-- Screen 1: Directives / Pipes / Animations
      |-- Screen 2: Choose a category and then a particular topic
      |-- Screen 3: Explanation -> interactive controls -> visual result -> code
    Existing complaint screens remain available at /dashboard, /new and /about.

**Memory hook:** Choose -> Try -> See -> Explain.

## 3. Prerequisites and local setup
1. Install a Node.js version compatible with Angular 20.3 (Node 20.19+, 22.12+, or 24.x).
2. Open the repository in VS Code.
3. In VS Code Terminal, type these commands from the repository root:

    cd Angular/society-help-desk
    node --version
    npm --version
    npm install
    npm run test:lab
    npm run build
    npm start

4. Browse to http://localhost:4200/ and verify the three category cards.
5. Select Directives -> ngClass -> Toggle High priority. Card styling and status must change.
6. Navigate to Pipes -> Currency, then switch the currency option. Formatting must change without changing the numeric amount.
7. Navigate to Animations -> animate.leave. Dismiss the notice and observe it exit before removal.
8. Click Dashboard in the header and verify the earlier complaint experience is preserved.

## 4. App files and their purposes
| File | Purpose |
| --- | --- |
| src/main.ts | Angular routes for all three screens; original routes preserved |
| src/lab/lab.catalog.ts | All 26 topics, interview memory hooks, code and expected results |
| src/lab/lab-pages.ts | Screen 1 and screen 2 components |
| src/lab/lab-home.html | Three-card overview |
| src/lab/lab-category.html | Lists a selected category's demos |
| src/lab/lab-demo.ts | Signal state and click/input behavior |
| src/lab/lab-demo.html | Individual live effects |
| src/lab/lab-directives.ts | Custom Renderer2, HostListener and HostBinding examples |
| src/lab/lab-status.pipe.ts | Pure status label pipe |
| src/lab/lab.css | Demo styling, keyframes, reduced-motion behavior |
| scripts/lab-acceptance.test.mjs | Structural checks, run with npm run test:lab |

All paths above are relative to Angular/society-help-desk.

## 5. Coverage and expected visual effects
| Category | Topics | Student evidence |
| --- | --- | --- |
| Directives | ngClass, ngStyle, HTML attributes and disabled, @if, @for, @switch, custom hover highlight, priority badge | Change styles; create and remove warnings; grow/empty a list; switch role; update custom badge |
| Pipes | uppercase, lowercase, titlecase, currency, date, percent, JSON, slice, chained pipes, custom status label | Type/change input and show different formatted outputs without modifying source state |
| Animations | animate.enter, animate.leave, fade, slide, scale, hover lift, notification, staggered list | Enter/remove elements; change CSS transforms; replay list entrance; respect Reduced Motion preferences |

There are 8 directive, 10 pipe and 8 animation demos: 26 in total. Each is accessible from the category list and has a live detail screen.

## 6. Guided lab: ngClass
**Problem:** A High priority complaint must be emphasized without manually changing DOM classes.

1. Open Directives -> ngClass.
2. Click Toggle High priority.
3. Verify the complaint card color becomes coral and its status says HIGH.
4. Click again and verify NORMAL styling returns.

**Expected:** Changing the signal updates the ngClass class map and its host element.  
**Common error:** Unknown ngClass: import CommonModule or NgClass in the standalone component.  
**Interview answer:** ngClass applies conditional CSS classes based on a component expression.

## 7. Guided lab: CurrencyPipe
**Problem:** Show maintenance budget using readable currency formatting.

1. Open Pipes -> Currency.
2. Type 12450 into the amount control.
3. Switch INR to USD.
4. Explain why the numeric amount is unchanged.

**Expected:** Only formatting changes. This is NOT a real exchange rate conversion.  
**Common error:** Missing currency pipe: import CommonModule or CurrencyPipe.  
**Interview answer:** Pipes transform template presentation and do not mutate state.

## 8. Guided lab: animate.leave
**Problem:** Notification should disappear smoothly.

1. Open Animations -> animate.leave.
2. Click Dismiss notice.
3. Observe the exit animation, then the node removal.
4. Click Recreate notice to repeat.

**Expected:** Angular waits for the CSS leave animation before removing the element.  
**Accessibility:** OS Reduced Motion may remove most animation effects; this is correct.  
**Migration note:** The module's original animations lesson describes legacy triggers. Modern Angular 20.2+ supports animate.enter and animate.leave; the old @angular/animations package is deprecated.

## 9. Practice and assignments
- Foundation: Add one fictitious complaint to the @for example; identify its stable tracking ID.
- Applied: Add a reset option to a control and explain each signal update.
- Interview: Contrast [ngClass] with class property binding; contrast custom directive and pipe.
- Challenge: Build a new detail topic with an actual effect, catalogue entry, error/empty state, accepted test and code illustration.

## 10. Validation, troubleshooting and definition of done
- [ ] npm run test:lab passes all static mapping checks.
- [ ] npm run build compiles the Angular project.
- [ ] All three screens render and category, topic and breadcrumb links navigate correctly.
- [ ] All 26 items show a real result after changing an input/button.
- [ ] Reset and Next topic controls behave correctly.
- [ ] An empty @for list shows the @empty message.
- [ ] A bad category or demo address gives a helpful not-found message.
- [ ] Existing Society Help Desk dashboard/new complaint/about still work.
- [ ] Save a before/after screenshot and terminal verification output.
- [ ] Student can explain each demonstration's concept in two minutes.

**Verification status:** Source authored and structurally reviewable. Running the Angular compiler and checking browser interactions requires npm installation on a compatible workstation.

**Official references:** https://angular.dev/guide/templates/control-flow ; https://angular.dev/guide/templates/pipes ; https://angular.dev/guide/animations ; https://angular.dev/reference/versions

