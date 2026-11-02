# Chapter 03 — Working Solution Map

This chapter links to the **actual source inside the same application**. Do not copy the implementation into the chapter directory; doing so would create duplicate code and cause project drift.

## Open the source

1. [Home screen](../../src/lab/lab-home.html) — three cards to open category screens.
2. [Topic list](../../src/lab/lab-category.html) — uses Angular Router to open a demo.
3. [Live effects](../../src/lab/lab-demo.html) — 26 interactive template implementations.
4. [Component logic](../../src/lab/lab-demo.ts) — writable signals, handlers and reset.
5. [Catalogue](../../src/lab/lab.catalog.ts) — topic names, examples and expected results.
6. [Directives](../../src/lab/lab-directives.ts) — reusable host behavior.
7. [Custom pipe](../../src/lab/lab-status.pipe.ts) — display-only status transformation.
8. [Styling](../../src/lab/lab.css) — responsive cards and native CSS animations.
9. [Structural acceptance tests](../../scripts/lab-acceptance.test.mjs) — verify wiring.

## Explain the output

- **ngClass:** Angular updates the complaint card class when the highPriority signal changes.
- **CurrencyPipe:** The same numerical value is formatted with a selected currency code; this is formatting rather than currency conversion.
- **animate.leave:** Angular allows the CSS exit animation to finish before removing the element from the DOM.
- **Custom directive:** The host element acquires shared behavior through the directive.
- **Custom pipe:** Formatting leaves the underlying state unchanged.

## Student acceptance

Explain the relevant code line, demonstrate a changed output, run the structural checks and Angular build locally, and capture evidence. The current repository was statically inspected; a successful local build/browser run must be recorded before calling it runtime-verified.

