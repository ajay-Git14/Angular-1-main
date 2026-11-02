# animate.enter — Live Execution Detail

**Curriculum:** Chapter 03 → Animations → animate.enter → Execution
**Status:** Interactive Angular example implemented in the shared Society Help Desk application; local compiler/browser verification still required.

## Problem and learner story
Add a notice with a CSS entrance animation. We use fictional Society Help Desk data for the examples.

## Memory hook
**Enter = a new actor walks onto the stage.**

## Open and execute the demo
1. From repository root, run:

       cd Angular/society-help-desk
       npm install
       npm run test:lab
       npm run build
       npm start

2. Open http://localhost:4200/chapters/03/animations/enter
3. **Try this:** Show or hide the panel.
4. **Expected result:** The panel fades/slides in when created.
5. Click Reset and repeat. Explain how the result changes.

## Relevant instructional code
This snippet comes from the Module 03 learning catalogue. The real executable implementation is in src/lab/, not in this Markdown document.

~~~typescript
@if (visible()) { <article animate.enter="lab-enter">New notice</article> }
~~~

## Open the real implementation
- [Executable HTML and interactive binding](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.html)
- [Component signals and event handlers](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.ts)
- [Supporting Angular implementation](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab.css)
- [Original Chapter 03 syllabus detail](https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/5.%20Animations.md)

## Beginner explanation
Add a notice with a CSS entrance animation. The component has a changeable state and a template binding or an animation rule. When the learner acts on the control, Angular updates the rendered result above. Read the linked original lesson for all labs and variants.

## Practice, evidence and interview readiness
- [ ] Modify input and capture a before/after screenshot.
- [ ] Find the matching @case ('enter') in src/lab/lab-demo.html.
- [ ] Trace the event or input to lab-demo.ts or the custom pipe/directive file.
- [ ] Explain whether the change affects structure, styles, formatted text, or animation.
- [ ] Run npm run build successfully and record terminal evidence.
- [ ] Recall the memory hook without opening the guide.

**Note:** The actual app executes this demo; the Markdown explains it. The environment used to author this guide has not executed the Angular build or browser test.
