# Chapter 03 — Directives, Pipes and Animations

**Canonical flow:** Chapters → Topics → Subtopics → Execution (with dedicated detail file).

The live code remains in society-help-desk/src/lab; do not duplicate a second Angular project inside chapters.

## Run locally

From the Angular-1 repository root:

    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

Go to http://localhost:4200 and follow:

    /chapters                               Chapters (11)
    /chapters/03                            Chapter 03 topics (5)
    /chapters/03/attribute-directives       Subtopics (3)
    /chapters/03/attribute-directives/ngclass  Live demo + implementation detail

## Five original topics and live subtopics

| Topic | Live demos |
| --- | ---: |
| Attribute Directives, [ngClass], [ngStyle], other attributes | 3 |
| Structural Directives | 3 |
| Custom Directives | 2 |
| Pipes and custom pipes | 10 |
| Animations | 8 |
| Total | 26 |

## One execution detail file per concept

[All 26 execution guides](executions/) include student actions, expected output, the relevant code snippet, source links, memory hooks and assessment evidence.

Examples: [ngClass](executions/ngclass.md), [@for](executions/for.md), [CurrencyPipe](executions/currency.md), [Custom Hover Directive](executions/hover.md), [animate.leave](executions/leave.md).

## Source of truth

| Layer | File |
| --- | --- |
| Chapter/topic/subtopic maps | [course-catalog.ts](../../src/lab/course-catalog.ts) |
| Three navigation components | [course-pages.ts](../../src/lab/course-pages.ts) |
| Angular route tree | [main.ts](../../src/main.ts) |
| Real effects | [lab-demo.html](../../src/lab/lab-demo.html) |
| Angular input and signal logic | [lab-demo.ts](../../src/lab/lab-demo.ts) |
| Custom directives and pipes | [lab-directives.ts](../../src/lab/lab-directives.ts) and [lab-status.pipe.ts](../../src/lab/lab-status.pipe.ts) |
| Effects stylesheet | [lab.css](../../src/lab/lab.css) |

[Student practice](PRACTICE.md) · [TODO](TODO.ts) · [Solution](SOLUTION.md)

The old three-card /lab entry point remains available for backward compatibility. Angular compilation/browser execution must still be verified on a supported local workstation.

