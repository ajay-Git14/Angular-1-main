# Lab 9: Shared User State — Live Execution Guide

**Chapter:** 05 Dependency Injection and Services
**Topic:** Services and providers @Injectable
**Subtopic:** Lab 9: Shared User State
**Source:** [Original syllabus](https://github.com/techlambda-services/Angular-1/blob/main/Angular/5.%20Dependency%20Injection%20and%20Services/2.%20Services%20and%20providers%20%40Injectable.md)
**App route:** `/chapters/05/services-and-providers-injectable/lab-9`

## 1. Problem, Context and 5W+H
Sharing Data Using Service: Shared User State in the fictitious Society Help Desk project.

**Who:** A learner working with fictitious Society Help Desk complaints.
**Why:** Business services are reusable, and Angular's injector manages dependencies.
**Where:** The single existing Angular application under `Angular/society-help-desk`.
**How:** Open the live execution and follow the actions below.

## 2. Beginner analogy and memory hook
**Singleton state is shared.**

Think of a service as a staffed desk: the component requests a capability, and the injector arranges which service instance is available. Application-wide root providers can share state, while component providers can have independent state.

## 3. Lab actions and expected effect
1. Open a terminal at the `Angular-1` repository root.
2. Run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

3. Open **http://localhost:4200/chapters/05/services-and-providers-injectable/lab-9**.
4. **Action:** Change the current user through UserService.
5. **Expected output:** Two consumers show the same updated name.
6. Press Reset training data and compare the next run.

## 4. Original course excerpt
This code excerpt is sourced from the corresponding lab in the user-provided Chapter 5 syllabus. It may be a conceptual fragment rather than a standalone executable file.

~~~typescript
@Injectable({

providedIn:'root'

})

export class UserService{

userName =

'Deepak';

}
~~~

## 5. Working source and explanation
- [Executable component class](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/di/di-execution.ts)
- [Real Angular HTML interactions](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/di/di-execution.html)
- [Business services, tokens and providers](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/di/di-services.ts)
- [Isolated component provider](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/di/di-scope-panel.ts)
- [This subtopic's concept, memory hook and evidence](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/di/di-notes.ts)

Follow `@case (9)` in the topic-specific section of `di-execution.html`. Use the button or input and observe how the source's injected service updates the reactive state. Some concept labs share business services; the teaching focus and output are specific to this subtopic.

## 6. Best practices and engineering trade-offs
Prefer constructor injection or `inject()` over `new` for application dependencies; use `providedIn:'root'` when shared state is intended; define component-scoped providers when isolation is required; use typed `InjectionToken` for non-class dependencies. Changes in the browser are demonstration state only, not data persisted in a backend.

## 7. Troubleshooting
- **NullInjectorError:** Ensure a provider exists in the correct injector hierarchy.
- **Unexpected shared value:** Inspect whether a service is `providedIn:'root'` or listed in a component's `providers`.
- **Duplicate instances:** Check for accidental component-level re-provision.
- **Blank output:** Verify the selected topic/route and service method.
- **API not responding:** This chapter never makes HTTP requests; the API token is displayed only. API integration belongs to Chapter 06.

## 8. Interview / Evidence / Assessment
- **Cross-question:** Who constructs this service, and where is its lifetime managed?
- **Foundation assignment:** Reproduce the observed effect.
- **Applied assignment:** Add a small business rule in the injected service and update the visible output.
- **Interview assignment:** Contrast root and component injection, and explain `useClass`, `useValue`, `useExisting` and `useFactory`.
- **Evidence:** Submit a before/after screenshot, a relevant code excerpt and terminal test/build output.

**Definition of Done:** The fourth-level route opens the correct concept, controls produce the expected change, and `npm run build` completes without Angular errors on the learner's machine.

**Verification note:** The source is delivered as code; successful Angular build/browser execution must be verified independently.
