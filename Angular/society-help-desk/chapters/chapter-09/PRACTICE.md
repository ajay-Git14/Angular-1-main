# Chapter 09 — Enterprise UI boundaries

## Learning objective
Show mock role-aware UI without pretending it is authentication.

**Single continuous project:** Society Help Desk. Start from this chapter branch. Run `cd Angular/society-help-desk && npm install && npm start` after cloning.

## Student practice (TODO)
- [ ] **Understand:** Open `src/main.ts`, identify the current implementation and draw its data flow.
- [ ] **Implement:** Add a clearly marked demo role signal and conditional UI. Document the required server authorization for a production version.
- [ ] **Demonstrate:** Mock role differences can be demonstrated; no false security claims.
- [ ] **Quality check:** Run `npm run build`; inspect browser console and correct errors.
- [ ] **Evidence:** Save screenshots or screen recording, list files changed and Git commit SHA, and present a two-minute walkthrough.

## Solution guide
The chapter branch includes the full original Society Help Desk demo source. Treat it as a working **reference design to compare against**, not as proof that this chapter enhancement is already implemented. Modify the real application files indicated above. Use existing components, forms, routing, and complaint store patterns as the model. Review any differences as you implement the TODO.

## Definition of done
Mock role differences can be demonstrated; no false security claims. Re-run the full demo: dashboard, filtering, creating a complaint, status updates and About. Capture evidence after successful local build.

**Verification limitation:** Runtime build has not been executed in the authoring environment because npm registry was not accessible. All additions on this chapter branch are instructional until locally verified.
