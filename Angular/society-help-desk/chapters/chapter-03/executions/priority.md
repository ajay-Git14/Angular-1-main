# Custom Priority Badge — Live Execution Detail

**Curriculum:** Chapter 03 → Custom Directives → Custom Priority Badge → Execution
**Status:** Interactive Angular example implemented in the shared Society Help Desk application; local compiler/browser verification still required.

## Problem and learner story
Bind a reusable directive to a changing complaint priority. We use fictional Society Help Desk data for the examples.

## Memory hook
**Custom directive = a reusable rule.**

## Open and execute the demo
1. From repository root, run:

       cd Angular/society-help-desk
       npm install
       npm run test:lab
       npm run build
       npm start

2. Open http://localhost:4200/chapters/03/custom-directives/priority
3. **Try this:** Select Low, Medium or High.
4. **Expected result:** Badge color and data-priority attribute update together.
5. Click Reset and repeat. Explain how the result changes.

## Relevant instructional code
This snippet comes from the Module 03 learning catalogue. The real executable implementation is in src/lab/, not in this Markdown document.

~~~typescript
<span [appPriority]="priority()">Priority {{ priority() }}</span>
// @HostBinding sets class and data-priority.
~~~

## Open the real implementation
- [Executable HTML and interactive binding](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.html)
- [Component signals and event handlers](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.ts)
- [Supporting Angular implementation](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-directives.ts)
- [Original Chapter 03 syllabus detail](https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/3.%20Custom%20Directives.md)

## Beginner explanation
Bind a reusable directive to a changing complaint priority. The component has a changeable state and a template binding or an animation rule. When the learner acts on the control, Angular updates the rendered result above. Read the linked original lesson for all labs and variants.

## Practice, evidence and interview readiness
- [ ] Modify input and capture a before/after screenshot.
- [ ] Find the matching @case ('priority') in src/lab/lab-demo.html.
- [ ] Trace the event or input to lab-demo.ts or the custom pipe/directive file.
- [ ] Explain whether the change affects structure, styles, formatted text, or animation.
- [ ] Run npm run build successfully and record terminal evidence.
- [ ] Recall the memory hook without opening the guide.

**Note:** The actual app executes this demo; the Markdown explains it. The environment used to author this guide has not executed the Angular build or browser test.
