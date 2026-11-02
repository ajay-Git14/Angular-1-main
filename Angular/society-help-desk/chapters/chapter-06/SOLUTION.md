# Chapter 06 — Working Code, Explanation and Interview Solutions

The solution is **inside the original Angular Society Help Desk app**. Source files are not copied into the course chapter folder.

## Canonical code and architecture
- src/main.ts: provideHttpClient(withInterceptors([auth, log, error, mockBackend])) + dedicated Chapter 06 route.
- src/api/training-api.ts: typed TrainingApi, HttpInterceptorFn request pipeline, mocked HttpResponse/HttpErrorResponse, local CRUD and retry endpoint.
- src/api/training-execution.ts: live Angular component and real RxJS/signal handlers.
- src/api/training-execution.html: practical screens and expected effects.
- src/api/training-store.ts: Injectable root store with writable/readonly signals, computed totals and BehaviorSubject.
- src/api/training-notes.ts: original syllabus snippets aligned to all 120 labs.

## Architecture visualization

    Angular component / button
          ↓ inject(TrainingApi)
    HttpClient.get/post/put/delete
          ↓ 1. auth interceptor: demo header
          ↓ 2. log interceptor: request, loading and response
          ↓ 3. error interceptor: status and rethrow
          ↓ 4. mock backend interceptor
    RxJS Observable<HttpResponse> → subscriber
          ↓
    display output or update TrainingStore signals
          ↓
    computed selectors and Angular template

### Interview memory hooks

**HTTP:** Request path goes out and response/error comes back through the interceptors, but the training backend is fully in memory.  
**RxJS:** An Observable is a stream recipe. A Subject is a shared microphone. A BehaviorSubject keeps its most recent value.  
**Signals:** Writable signals hold state; computed() derives state; effect() records side effects.  
**Store:** A single root-provided store avoids duplicating state across components.

### Trade-offs and gotchas
Do not put authentication secrets inside frontend code. An Authorization header example is not production authentication. Use server-side validation and an actual backend before attempting persistence. Avoid subscribing indefinitely without teardown; this code uses Angular destroy-aware cleanup. Prefer computed for derivations over effects that write to source state.

## Acceptance
Run npm install, npm run test:lab, npm run build and npm start. Reproduce one complete demonstration per topic and present input → implementation → expected effect evidence. Source mapping is not proof of a successful local build.

