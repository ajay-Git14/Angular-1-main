# UpperCasePipe — Live Execution Detail

**Curriculum:** Chapter 03 → Pipes and custom pipes → UpperCasePipe → Execution
**Status:** Interactive Angular example implemented in the shared Society Help Desk application; local compiler/browser verification still required.

## Problem and learner story
Display a complaint title in uppercase while preserving the raw value. We use fictional Society Help Desk data for the examples.

## Memory hook
**Pipe changes presentation, not stored data.**

## Open and execute the demo
1. From repository root, run:

       cd Angular/society-help-desk
       npm install
       npm run test:lab
       npm run build
       npm start

2. Open http://localhost:4200/chapters/03/pipes-and-custom-pipes/uppercase
3. **Try this:** Edit the complaint title.
4. **Expected result:** The output is uppercase; the input retains its original casing.
5. Click Reset and repeat. Explain how the result changes.

## Relevant instructional code
This snippet comes from the Module 03 learning catalogue. The real executable implementation is in src/lab/, not in this Markdown document.

~~~typescript
<p>{{ complaintTitle() | uppercase }}</p>
~~~

## Open the real implementation
- [Executable HTML and interactive binding](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.html)
- [Component signals and event handlers](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.ts)
- [Supporting Angular implementation](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/lab/lab-demo.ts)
- [Original Chapter 03 syllabus detail](https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/4.%20Pipes%20and%20custom%20pipes.md)

## Beginner explanation
Display a complaint title in uppercase while preserving the raw value. The component has a changeable state and a template binding or an animation rule. When the learner acts on the control, Angular updates the rendered result above. Read the linked original lesson for all labs and variants.

## Practice, evidence and interview readiness
- [ ] Modify input and capture a before/after screenshot.
- [ ] Find the matching @case ('uppercase') in src/lab/lab-demo.html.
- [ ] Trace the event or input to lab-demo.ts or the custom pipe/directive file.
- [ ] Explain whether the change affects structure, styles, formatted text, or animation.
- [ ] Run npm run build successfully and record terminal evidence.
- [ ] Recall the memory hook without opening the guide.

**Note:** The actual app executes this demo; the Markdown explains it. The environment used to author this guide has not executed the Angular build or browser test.
