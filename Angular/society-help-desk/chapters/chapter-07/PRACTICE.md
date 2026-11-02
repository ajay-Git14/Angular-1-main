# Chapter 07 — Progressive Guided Practice

Run npm install, npm run test:lab, npm run build and npm start from Angular/society-help-desk.

## Practical 1 — Routing

Open /chapters/07/routing-and-navigation/lab-9. Compare RouterLink and programmatic Router.navigate. Test the default redirect (Lab 7) and the wildcard fallback (Lab 8).

## Practical 2 — URL parameters

Open /chapters/07/route-parameters/lab-13. Navigate Employee 101 → 102 on the parameter screen. Compare snapshot.paramMap, paramMap, and queryParamMap.

## Practical 3 — Nested child routes

Open /chapters/07/child-routes/lab-10. Switch Complaints, Residents, Reports and Monthly. Observe the persistent parent and nested outlet.

## Practical 4 — Guards

Open /chapters/07/route-guards/lab-7. Compare signed-out, signed-in and fake Admin decisions. Open Lab 10 and edit the maintenance note. Choose Cancel at CanDeactivate, save and navigate again.

## Practical 5 — Lazy loading

Open /chapters/07/lazy-loading/lab-2 then Lab 6. Observe actual lazy components and use DevTools → Network → JS to identify chunks. Refresh with cache disabled before recording evidence.

## Assignment levels

- Foundation: draw URL → route → component → router-outlet.
- Applied: add one :id parameter and query filter.
- Interview: compare CanActivate, CanMatch, CanDeactivate and explain server security.
- Challenge: add a lazy nested feature and its regression test.

## Evidence checklist

- [ ] Four course levels open successfully.
- [ ] URL parameter and query parameter changes demonstrated.
- [ ] Parent layout and child outlet screenshots captured.
- [ ] Guard redirects and unsaved-change confirmation shown.
- [ ] Actual lazy chunk evidence in DevTools.
- [ ] Previous chapters and original Society Help Desk still work.
- [ ] npm run test:lab and npm run build pass locally.

