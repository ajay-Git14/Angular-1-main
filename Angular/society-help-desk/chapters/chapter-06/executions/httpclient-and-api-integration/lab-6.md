# Lab 6: DELETE Request — Chapter 06 Execution Detail

**Chapter:** API Integration, RxJS and Signals  
**Topic:** HttpClient and API integration  
**Lab:** Lab 6: DELETE Request  
**App path:** `/chapters/06/httpclient-and-api-integration/lab-6`  
**Source:** [Published syllabus](https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/1.%20HttpClient%20and%20API%20integration.md)

## Problem and learning objectives
HttpClient and API integration — DELETE Request. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.

**Memory hook:** Component → API service → HttpClient → Interceptors → Fake backend → Observable result.

## Step-by-step live exercise

1. Open VS Code at the Angular-1 repository root.
2. Run:

~~~powershell
cd Angular/society-help-desk
npm install
npm run test:lab
npm run build
npm start
~~~

3. Visit **http://localhost:4200/chapters/06/httpclient-and-api-integration/lab-6**.
4. **Do this:** Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.
5. **Expected:** HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.
6. Open browser DevTools and the Request Trace panel to observe the method, status, body and interception flow. Click Reset to repeat.

## Concept and code example from original syllabus
This excerpt follows the existing course document. It may be a short teaching fragment; the actual compiled implementation lives under `src/api`.

~~~typescript
deleteComplaint(
id:number
){

return this.http.delete(

`https://api.com/complaints/${id}`

);

}
~~~

## Real Angular implementation
- [HttpClient and typed training service](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-api.ts)
- [Functional request/response/error interceptors](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-api.ts)
- [Interactive handlers](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.ts)
- [Execution template](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-execution.html)
- [Topic-specific notes](https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/src/api/training-notes.ts)

## Architecture / Engineering explanation
This lesson uses a genuine Angular `HttpClient` call and registered `HttpInterceptorFn` functions. Requests to `/api/training` terminate in an in-memory interceptor that emits `HttpResponse` or `HttpErrorResponse` events through RxJS Observables; **no network API is contacted**. Authentication headers are clearly labeled `DEMO-ONLY`, never real bearer tokens.

## Validation, assignment and evidence
- [ ] Confirm the correct Level 04 lesson is displayed.
- [ ] Perform the action and capture initial and changed output.
- [ ] Explain HttpClient cold Observables and why a subscription is needed.
- [ ] Identify the appropriate interceptor or REST method.
- [ ] Inspect a failing request and show error handling.
- [ ] Run a successful Angular build locally; capture output.
- [ ] Give a two-minute interview answer: what belongs in the component versus API service?

**Common errors:** Missing `provideHttpClient()`, unregistered interceptors, no subscription, or unexpected server CORS. Here CORS is irrelevant because all training requests terminate inside the app.

**Definition of done:** Interactive effect reproduced, source explained, local test and production build pass.

**Scope:** No real authentication, remote API, banking activity or persistence; this is a safe classroom simulation using real Angular APIs.
