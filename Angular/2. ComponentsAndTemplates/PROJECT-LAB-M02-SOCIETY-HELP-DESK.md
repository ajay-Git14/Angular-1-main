# Module 02 — Connected Practical: Society Help Desk Dashboard

**Outcome:** Extend the Angular app started in Module 01. Students can show a dashboard of complaints, search them, mark one resolved, and explain parent/child communication.

## Before starting
Use the **same Angular workspace from Module 01**. If starting fresh, use [Module 01 setup](../1.%20Fundamentals/00.%20START%20HERE%20-%20Hands-on%20Beginner%20Lab.md). Run `ng version`; use a current supported standalone Angular setup and compatible Node.js. Do not create a new app for this module.

**Milestone order:** 01 Domain model → 02 Header → 03 Reusable complaint card → 04 Dashboard → 05 Connect to app → 06 Styling + evidence.

### 01 — Define the data model
Create `src/app/models/complaint.ts` (create the `models` folder if necessary):

```ts
export interface Complaint {
  id: number;
  title: string;
  category: 'Water' | 'Electricity' | 'Cleaning' | 'Lift';
  status: 'Open' | 'Resolved';
}
```

**Understand:** This describes the shape of each complaint; it is not a database.

### 02 — Create the header
In the workspace terminal:

```bash
ng generate component shared/header
ng generate component features/complaint-card
ng generate component features/dashboard
```

Generated component filenames/class names vary across CLI versions. In the snippets below, keep existing generated `@Component` configuration, `selector`, `templateUrl`, and `styleUrl`. Add imports, fields and methods to the actual generated classes. The typical modern generated classes are `Header`, `ComplaintCard`, and `Dashboard` and selectors are `app-header`, `app-complaint-card`, and `app-dashboard`. Adjust if yours differ.

In the Header component class add:

```ts
title = 'Society Help Desk';
```

Replace its referenced HTML with:

```html
<header class="site-header">
  <h1>{{ title }}</h1>
  <p>Track society maintenance complaints in one place.</p>
</header>
```

### 03 — Build the reusable complaint card
In the complaint-card component file, add to the Angular core import:

```ts
import { input, output } from '@angular/core';
import { Complaint } from '../../models/complaint';
```

(If `@angular/core` is already imported, add these names to that existing import instead of duplicating it.)

Inside the generated class:

```ts
complaint = input.required<Complaint>();
resolved = output<number>();
```

Replace the child HTML template with:

```html
<article class="complaint-card">
  <h3>{{ complaint().title }}</h3>
  <p>Category: {{ complaint().category }}</p>
  <p>Status: <strong>{{ complaint().status }}</strong></p>
  <button type="button"
    [disabled]="complaint().status === 'Resolved'"
    (click)="resolved.emit(complaint().id)">
    {{ complaint().status === 'Resolved' ? 'Resolved' : 'Mark resolved' }}
  </button>
</article>
```

**Why it works:** `input.required` makes the parent supply complaint data. `output<number>()` announces the clicked complaint ID to the parent.

### 04 — Build the dashboard
In the generated dashboard TypeScript component file:

- Import `FormsModule` from `@angular/forms`
- Import your generated `ComplaintCard` component using its real class name and path, typically `../complaint-card/complaint-card`
- Import `Complaint` from `../../models/complaint`
- Add `FormsModule` and `ComplaintCard` to `@Component({ imports: [...] })`
- Add inside the generated dashboard class:

```ts
searchText = '';
complaints: Complaint[] = [
  { id: 1, title: 'Water leakage in Block A', category: 'Water', status: 'Open' },
  { id: 2, title: 'Lift not working in Block B', category: 'Lift', status: 'Open' },
  { id: 3, title: 'Lobby cleaning required', category: 'Cleaning', status: 'Resolved' }
];

get filteredComplaints(): Complaint[] {
  const query = this.searchText.trim().toLowerCase();
  return this.complaints.filter(item => item.title.toLowerCase().includes(query));
}

get openCount(): number {
  return this.complaints.filter(item => item.status === 'Open').length;
}

resolveComplaint(id: number): void {
  this.complaints = this.complaints.map(item =>
    item.id === id ? { ...item, status: 'Resolved' as const } : item
  );
}
```

Replace the dashboard HTML template:

```html
<section>
  <h2>Complaints dashboard</h2>
  <p>Open complaints: {{ openCount }}</p>

  <label for="search">Search complaint</label>
  <input id="search" name="search" [(ngModel)]="searchText" placeholder="e.g. lift">

  @for (item of filteredComplaints; track item.id) {
    <app-complaint-card [complaint]="item"
      (resolved)="resolveComplaint($event)" />
  } @empty {
    <p>No matching complaints found.</p>
  }
</section>
```

**Important:** The filter is local/in-memory for this milestone. Real API/database work comes in later modules.

### 05 — Connect the feature to the application
In root component TypeScript (`src/app/app.ts` or `app.component.ts`), import the Header and Dashboard standalone components and add them to its `@Component.imports` array. Keep other imports needed by your project.

Replace root template with:

```html
<app-header />
<main>
  <app-dashboard />
</main>
```

Your actual selectors must match those from generated child decorators. If root previously used `<router-outlet />`, it is deliberately omitted here; Module 07 will add application navigation.

### 06 — Style and run
In the header component's CSS:

```css
.site-header { padding: 1.5rem; background: #e9eefb; border-radius: .5rem; }
.site-header h1 { margin: 0; }
```

In the complaint-card component's CSS:

```css
.complaint-card { margin: 1rem 0; padding: 1rem; border: 1px solid #b9c6dc; border-radius: .5rem; }
button { padding: .5rem .75rem; }
button:disabled { cursor: not-allowed; opacity: .6; }
```

In `src/styles.css` (or the global stylesheet configured in `angular.json`):

```css
body { font-family: system-ui, sans-serif; max-width: 850px; margin: 2rem auto; padding: 0 1rem; }
input { display: block; margin: .6rem 0 1rem; padding: .5rem; width: min(95%, 25rem); }
```

Run:

```bash
ng serve --open
```

**Expected before interaction:** Three complaints appear; 'Open complaints: 2'; third card has disabled Resolved button.

**Test A:** Click **Mark resolved** on the water leakage card. Expected: 'Open complaints: 1'; water card now reads Resolved and its button disables.

**Test B:** Type `lift` in the search field. Expected: Only the lift complaint appears. Clear field to restore all cards.

**Test C:** Search for `xyz`. Expected: 'No matching complaints found.'

Finally, stop `ng serve` with Ctrl+C and run `ng build`. Record whether the build succeeds. If it fails, correct reported TypeScript/template errors before publishing evidence.

## Troubleshooting

| Problem | Fix |
|---|---|
| Cannot find component class/path | Use the filename and exported class generated by your CLI |
| Unknown `app-complaint-card` or `app-dashboard` | Import the child in the parent component's `@Component.imports` |
| Unknown `ngModel` | Add `FormsModule` to Dashboard's `@Component.imports` |
| Required complaint input missing | Always supply `[complaint]="item"` to the child |
| Event doesn't update status | Check `(resolved)="resolveComplaint($event)"` and `output<number>()` |
| App shows original welcome page | Confirm you edited root template referenced by `templateUrl` |

## How each Module 02 topic contributes

| Topic | Where to find it in this project |
|---|---|
| 01 Standalone components | Header, ComplaintCard, Dashboard imports |
| 02 Components | Reusable complaint-card structure |
| 03 Control flow | `@for` and `@empty` in dashboard |
| 04 Template syntax | Interpolation in headings and status |
| 05 Data binding | Title and complaint values |
| 06 Event binding | Mark resolved click |
| 07 Property binding | Disabled button, complaint input |
| 08 Two-way binding | Search field with `[(ngModel)]` |
| 09 Lifecycle hooks | Optional console-only extension; not needed for core dashboard |
| 10 Classic @Input/@Output | Alternate API exercise comparing the card with decorators |
| 11 Signal input/output | The main ComplaintCard uses `input.required` and `output` |
| 12 Styles | Header, card and global CSS |

## Portfolio evidence — Module 02
Create `evidence/module-02/` (avoid private student/resident information). Submit:
- `01-dashboard-initial.png`: three complaint cards and open count.
- `02-resolved-state.png`: updated count after clicking.
- `03-search-state.png`: one search result and empty state.
- `04-build-result.png`: successful `ng build` output.
- `README.md`: project goal, setup commands, completed features, next roadmap item and screenshots.
- Git commit, e.g. `git add . && git commit -m "feat: add complaints dashboard module 02"` (configure Git identity first, and omit secrets).

**Two-minute demo:** Launch app → show three complaints → resolve one → search 'lift' → show empty state → explain parent-to-child data and child-to-parent event.

**DoD:** Demo works, build succeeds, screenshots exist, and you can describe what each component does.

**Next:** Module 03 adds visual priority/status rules, date display and formatting to this same complaint dashboard.

**References:** https://angular.dev/guide/components/inputs · https://angular.dev/guide/components/outputs · https://angular.dev/guide/templates/control-flow · https://angular.dev/guide/templates/two-way-binding
