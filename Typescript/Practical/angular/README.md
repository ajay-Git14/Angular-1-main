# Angular Decorators Lab (Labs 6–13)

**Requires a real Angular CLI project; cannot run as plain TypeScript.**

1. Install current supported Node.js LTS and npm.
2. `npx @angular/cli@latest new decorators-lab --standalone --routing=false --style=css`
3. `cd decorators-lab`
4. Replace the generated `src/app/app.ts` with the file at `angular/src/app/app.ts` in this bundle.
5. Confirm generated `src/main.ts` imports `App` from `./app/app` and bootstraps it (normal current Angular CLI default).
6. `npm start` (or `npx ng serve`) and open the URL printed by the CLI, normally `http://localhost:4200/`.
7. In the page, test Save, hover over the highlighted paragraph, click it and view the browser devtools console, see the currency format and NgModule greeting.

If your Angular project uses `app.component.ts` / `AppComponent`, adapt the file name/class name and `main.ts` import instead of copying blindly.

This example uses the still-supported decorator-based `@Input` and `@Output` APIs specifically to teach decorators. Modern Angular also offers signal-based `input()` and `output()` APIs.
