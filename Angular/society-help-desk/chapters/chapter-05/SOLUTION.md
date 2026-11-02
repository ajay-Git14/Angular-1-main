# Chapter 05 — Worked Solution Map

Angular resolves dependencies by token through its injector hierarchy.

**Root service:** ComplaintService is decorated with @Injectable({providedIn:'root'}). A component can access the same service by constructor injection, inject() or Injector.get().

**Component service:** DiScopePanel lists ScopedCounterService in providers. Two instances of the child component get distinct local counters; both continue sharing the root-provided SharedCounterService.

**Provider recipes:**
- useValue overrides SCOPE_LABEL in a child component.
- useClass provides LocalNotification to NotificationPort.
- useExisting aliases ComplaintService to COMPLAINT_ALIAS.
- useFactory derives DISPLAY_HEADING from TRAINING_CONFIG.

**Reusable business logic:** EmployeeService, UserService, AccountService and ComplaintService hold fictitious in-memory data and methods. The account balance is fake, and the API endpoint is displayed but not requested.

## Executable files

- src/di/di-services.ts — injectable business services and injection tokens
- src/di/di-execution.ts — constructor injection, inject(), providers and handlers
- src/di/di-execution.html — all thirty live lab branches
- src/di/di-scope-panel.ts — isolated child service provider
- src/di/di-notes.ts — original syllabus excerpts and memory hooks

Check every lab in the executions/ directory, reproduce the observed effect, pass npm run test:lab and npm run build, and record screenshots. Static source alone does not demonstrate a successful Angular compilation.

