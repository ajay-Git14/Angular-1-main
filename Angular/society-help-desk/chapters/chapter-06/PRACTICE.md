# Chapter 06 — Practical Workbook

Use the same Angular/society-help-desk application. No second ng new project.

## Lab setup
From Angular-1 root:

    cd Angular/society-help-desk
    npm install
    npm run test:lab
    npm run build
    npm start

## Eight progressive demonstrations

1. **HttpClient:** /chapters/06/httpclient-and-api-integration/lab-3. Click GET, POST, PUT, DELETE. Examine live result and data. Apply status filter. Explain cold Observable/subscription.
2. **HTTP Interceptors:** /chapters/06/http-interceptors/lab-10. Trigger mock 401, 403 and 500. Inspect auth/logging/error trace and retry. Explain interceptors and response handling.
3. **RxJS Fundamentals:** /chapters/06/rxjs-fundamentals/lab-5. Compare map, filter, tap, switchMap and mergeMap output across selected labs.
4. **Observables/Subjects:** /chapters/06/observables-and-subjects/lab-12. Compare cold Observable subscribers, hot Subject, BehaviorSubject, ReplaySubject and AsyncSubject.
5. **Signals:** /chapters/06/signals/lab-9. Update counter, object and array; compare set() and update() outputs.
6. **Computed:** /chapters/06/computed-signals/lab-8. Change price/quantity and observe subtotal, 18% tax and grand total. Explain why computed is readonly.
7. **Effects:** /chapters/06/effects/lab-4. Change signals, see effect run count and observed message. Compare effect and computed; avoid cyclic effects.
8. **State Management:** /chapters/06/angular-state-management-basics/lab-10. Add a complaint, select filter, update user and load mocked HTTP data into the store.

## Assignment levels
- Foundation: annotate the code that sends a mock GET and subscribes.
- Applied: add one new fake complaint property to TrainingApi and display it.
- Interview: compare RxJS Observable, Subject, BehaviorSubject, Signal and computed.
- Challenge: add a typed endpoint and a proper error path to the fake interceptor; extend source acceptance tests.

## Evidence checklist
- [ ] All four navigation levels render for Chapter 06.
- [ ] Eight topic pages have reactive output.
- [ ] No external API request is required or attempted.
- [ ] 401/403/500 errors and 503 retry are handled.
- [ ] Signal/computed/effect changes are observable.
- [ ] Form, DI and Chapter 03 routes still work.
- [ ] npm run test:lab and npm run build complete on local workstation.
- [ ] Screenshots and a two-minute interview-style explanation are recorded.

All data is fictional. Do not copy actual JWTs or secrets into Angular source.

