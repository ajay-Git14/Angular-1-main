# Chapter 04 — Why am I seeing "Not yet implemented" on Lab 1?

## Root cause analysis

The application's generic execution view (\`LabDemo\`) only implements the Chapter 03 directive/pipe/animation catalogue. It displays "This subtopic has a published course file, but a runnable Angular demonstration has not yet been implemented" when it receives a lab with no matching Chapter 03 demo.

Chapter 04 is **not a Chapter 03 demonstration**. All its 113 lab URLs must instead open the dedicated standalone Angular \`FormsExecution\` component.

- Canonical route: \`chapters/04/:topic/:subtopic\` → \`FormsExecution\`.
- Other chapters: \`chapters/:chapter/:topic/:subtopic\` → \`LabDemo\`.
- A \`CanMatchFn\` now prevents the generic handler from matching Chapter 04 even if routes are reordered.
- The old generic screen also has a Chapter 04-specific recovery link instead of incorrectly stating it is unimplemented.
- Regression tests cover the first form and every one of 113 Chapter 04 subtopics.

**Important distinction:** GitHub main already had the Chapter 04 route, so the user's view may also have come from an **older local checkout or old ng serve process**. We cannot determine the exact local version without its Git commit. This patch strengthens routing; updating and restarting your local app is still necessary.

## Exact Windows VS Code instructions

From the \`Angular-1\` repository root (save or commit local edits first):

~~~powershell
git status --short
git branch --show-current
git switch main
git pull --ff-only origin main
git rev-parse --short HEAD

cd Angular\society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

If a terminal is already running \`ng serve\`, press **Ctrl+C** in that terminal before starting the updated code. When the new server displays its local URL, open it in the browser. If an old tab is already open, use **Ctrl+Shift+R** to refresh.

## Verification URL

\`http://localhost:4200/chapters/04/forms/lab-1-first-form\`

**Expected:** heading "Lab 1: First Form", live native input controls, Submit button, reactive preview and code explanation. It must **not** show the "not yet implemented" paragraph.

Other examples:
- \`/chapters/04/user-input/lab-16-keyup-event\`
- \`/chapters/04/template-driven-forms/lab-1-first-template-driven-form\`
- \`/chapters/04/reactive-forms/lab-1-first-formcontrol\`
- \`/chapters/04/form-validation/lab-2-validation-message\`
- \`/chapters/04/dynamic-forms/lab-1-metadata-driven-form-problem-and-architecture\`

## Troubleshooting

- Still seeing the old message? Inspect \`git rev-parse --short HEAD\` and confirm you pulled the updated main. Stop any previously running Angular dev server and restart.
- Git refuses to switch or pull? Preserve local changes using a commit or stash before updating; don't discard work.
- Build errors? Share the **first new Angular compiler error**, plus your Node version. A correct route alone cannot fix an unrelated TypeScript/template error.
- Wrong URL? Use the \`/chapters/04/\` prefix and select exact topic/subtopic slugs from the app.

## Acceptance criteria

- [ ] \`npm run test:lab\` passes all regression tests, including Chapter 04 route protection.
- [ ] \`npm run build\` compiles successfully.
- [ ] The first form execution opens, changes values and submits locally.
- [ ] All six Forms topics route into FormsExecution.
- [ ] Chapter 03 demos and preexisting complaint pages still work.

No credentials or files are sent to a backend. Static checks have been authored; Angular compiler and live browser testing still require execution on a supported workstation.

