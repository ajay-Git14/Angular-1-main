/**
 * M03 curriculum map. The three categories map directly to the three cards on screen 1.
 * IDs match the implementation branches in lab-demo.component.html.
 * Do not add a catalogue item without adding an actual interactive demo and test.
 */
export type LabCategoryId = 'directives' | 'pipes' | 'animations';
export interface LabCategory {
  id: LabCategoryId;
  title: string;
  icon: string;
  subtitle: string;
  analogy: string;
  color: string;
}
export interface LabTopic {
  id: string;
  category: LabCategoryId;
  group: string;
  title: string;
  description: string;
  memoryHook: string;
  action: string;
  expected: string;
  code: string;
}
export const LAB_CATEGORIES: readonly LabCategory[] = [
  { id: 'directives', title: 'Directives', icon: '🧩',
    subtitle: 'Change appearance, behavior or rendered structure',
    analogy: 'A director tells the stage what changes.', color: 'blue' },
  { id: 'pipes', title: 'Pipes', icon: '🔄',
    subtitle: 'Transform data into readable output',
    analogy: 'A formatter presents the same data differently.', color: 'purple' },
  { id: 'animations', title: 'Animations', icon: '✨',
    subtitle: 'See elements enter, leave and change smoothly',
    analogy: 'A stage director controls how a scene moves.', color: 'orange' }
];

// All examples operate on fictitious Society Help Desk data rather than a disconnected app.
export const LAB_TOPICS: readonly LabTopic[] = [
  {
    id: 'ngclass', category: 'directives', group: 'Attribute directives', title: 'ngClass',
    description: 'Apply a complaint priority CSS class based on state.',
    memoryHook: 'ngClass = change the uniform.', action: 'Toggle High priority.',
    expected: 'The complaint card switches between normal and high-priority colors.',
    code: '<article [ngClass]="{ \'lab-urgent\': highPriority() }">Complaint card</article>\n<button (click)="highPriority.set(!highPriority())">Toggle priority</button>'
  },
  {
    id: 'ngstyle', category: 'directives', group: 'Attribute directives', title: 'ngStyle',
    description: 'Let the resident choose a notice font size.',
    memoryHook: 'ngStyle = change the paintbrush.', action: 'Move the font-size slider.',
    expected: 'The notice changes font size without rewriting HTML.',
    code: '<p [ngStyle]="{ fontSize: fontSize() + \'px\' }">Maintenance notice</p>\n<input type="range" [value]="fontSize()" (input)="setFontSize($event)">'
  },
  {
    id: 'attribute', category: 'directives', group: 'Attribute bindings', title: 'Attribute and disabled bindings',
    description: 'Show how HTML properties and accessibility attributes follow state.',
    memoryHook: 'A property controls behavior; an attribute labels it.', action: 'Check the acknowledgement box.',
    expected: 'Submit becomes enabled and aria-label changes to Ready to submit.',
    code: '<button [disabled]="!acknowledged()" [attr.aria-label]="acknowledged() ? \'Ready to submit\' : \'Acknowledge first\'">Submit</button>'
  },
  {
    id: 'if', category: 'directives', group: 'Structural control flow', title: '@if / @else',
    description: 'Create and remove a resident alert based on visibility.',
    memoryHook: '@if = the door opens only when needed.', action: 'Show or hide the alert.',
    expected: 'The alert element appears or is removed from the DOM.',
    code: '@if (showAlert()) { <p>Water service alert</p> } @else { <p>No active alert</p> }'
  },
  {
    id: 'for', category: 'directives', group: 'Structural control flow', title: '@for / @empty',
    description: 'Repeat maintenance complaints with a stable track identifier.',
    memoryHook: '@for = one template, many cards.', action: 'Add a demo complaint or clear the list.',
    expected: 'The list grows; when empty, the @empty message displays.',
    code: '@for (item of complaints(); track item.id) { <li>{{ item.title }}</li> } @empty { <p>No complaints</p> }'
  },
  {
    id: 'switch', category: 'directives', group: 'Structural control flow', title: '@switch / @case',
    description: 'Display a different message for Resident, Staff and Admin.',
    memoryHook: '@switch = choose one station.', action: 'Select a user role.',
    expected: 'Only the relevant role message is rendered.',
    code: '@switch (role()) { @case (\'Admin\') { <p>Approve budgets</p> } @default { <p>Resident view</p> } }'
  },
  {
    id: 'hover', category: 'directives', group: 'Custom attribute directives', title: 'Custom Hover Highlight',
    description: 'Reuse a directive to highlight any element on pointer entry and restore it on leave.',
    memoryHook: 'One directive, many elements.', action: 'Hover over the notice card.',
    expected: 'The background visibly highlights and then resets.',
    code: '<article [appHoverHighlight]="\'#dbeafe\'">Move your pointer here</article>\n// @HostListener + Renderer2 implement the behavior.'
  },
  {
    id: 'priority', category: 'directives', group: 'Custom attribute directives', title: 'Custom Priority Badge',
    description: 'Bind a reusable directive to a changing complaint priority.',
    memoryHook: 'Custom directive = a reusable rule.', action: 'Select Low, Medium or High.',
    expected: 'Badge color and data-priority attribute update together.',
    code: '<span [appPriority]="priority()">Priority {{ priority() }}</span>\n// @HostBinding sets class and data-priority.'
  },
  {
    id: 'uppercase', category: 'pipes', group: 'Built-in text', title: 'UpperCasePipe',
    description: 'Display a complaint title in uppercase while preserving the raw value.',
    memoryHook: 'Pipe changes presentation, not stored data.', action: 'Edit the complaint title.',
    expected: 'The output is uppercase; the input retains its original casing.',
    code: '<p>{{ complaintTitle() | uppercase }}</p>'
  },
  {
    id: 'lowercase', category: 'pipes', group: 'Built-in text', title: 'LowerCasePipe',
    description: 'Normalize visible building labels without changing input.',
    memoryHook: 'lowercase is a display filter.', action: 'Edit mixed-case building text.',
    expected: 'Result is all lowercase.',
    code: '<p>{{ buildingName() | lowercase }}</p>'
  },
  {
    id: 'titlecase', category: 'pipes', group: 'Built-in text', title: 'TitleCasePipe',
    description: 'Display a readable resident name.',
    memoryHook: 'titlecase = tidy the name tag.', action: 'Type a resident name.',
    expected: 'Each word is title cased.',
    code: '<p>{{ residentName() | titlecase }}</p>'
  },
  {
    id: 'currency', category: 'pipes', group: 'Built-in numeric', title: 'CurrencyPipe',
    description: 'Format the maintenance budget in INR and USD.',
    memoryHook: 'One number, different currency costumes.', action: 'Change the amount or currency.',
    expected: 'The numeric value is rendered with the selected currency symbol and grouping.',
    code: '<p>{{ amount() | currency:currencyCode() }}</p>'
  },
  {
    id: 'date', category: 'pipes', group: 'Built-in date', title: 'DatePipe',
    description: 'Show the same complaint date in short and long formats.',
    memoryHook: 'DatePipe = a calendar translator.', action: 'Pick a date.',
    expected: 'Both date formats update from the same input value.',
    code: '<p>{{ selectedDate() | date:\'mediumDate\' }}</p>\n<p>{{ selectedDate() | date:\'fullDate\' }}</p>'
  },
  {
    id: 'percent', category: 'pipes', group: 'Built-in numeric', title: 'PercentPipe',
    description: 'Show resolution completion as a percentage.',
    memoryHook: '0.75 becomes 75%.', action: 'Move the resolution slider.',
    expected: 'Decimal ratio is displayed as a percentage.',
    code: '<p>{{ completion() / 100 | percent:\'1.0-0\' }}</p>'
  },
  {
    id: 'json', category: 'pipes', group: 'Built-in utility', title: 'JsonPipe',
    description: 'Inspect a sample complaint object in formatted JSON.',
    memoryHook: 'JsonPipe = window into an object.', action: 'Change the sample status.',
    expected: 'The JSON reflects the changed status field.',
    code: '<pre>{{ complaintObject() | json }}</pre>'
  },
  {
    id: 'slice', category: 'pipes', group: 'Built-in utility', title: 'SlicePipe',
    description: 'Limit the first N complaint categories shown.',
    memoryHook: 'Slice = show only the beginning.', action: 'Move the items slider.',
    expected: 'Only the selected number of items is shown.',
    code: '@for (item of categories | slice:0:visibleCount(); track item) { <li>{{ item }}</li> }'
  },
  {
    id: 'chain', category: 'pipes', group: 'Pipe composition', title: 'Chained pipes',
    description: 'Trim a visible preview to 18 characters and uppercase it.',
    memoryHook: 'Pipes flow left to right.', action: 'Type a long status message.',
    expected: 'The first 18 characters are shown in uppercase.',
    code: '<p>{{ longMessage() | slice:0:18 | uppercase }}</p>'
  },
  {
    id: 'custom', category: 'pipes', group: 'Custom transformation', title: 'Custom Status Label Pipe',
    description: 'Convert internal status values into friendly labels with a pure custom pipe.',
    memoryHook: 'Custom pipe = your own formatter.', action: 'Choose a raw complaint status.',
    expected: 'Status label changes, but the raw value remains unchanged.',
    code: '<p>{{ status() | statusLabel }}</p>\n// @Pipe({ name: \'statusLabel\', standalone: true, pure: true })'
  },
  {
    id: 'enter', category: 'animations', group: 'Modern Angular entry/exit', title: 'animate.enter',
    description: 'Add a notice with a CSS entrance animation.',
    memoryHook: 'Enter = a new actor walks onto the stage.', action: 'Show or hide the panel.',
    expected: 'The panel fades/slides in when created.',
    code: '@if (visible()) { <article animate.enter="lab-enter">New notice</article> }'
  },
  {
    id: 'leave', category: 'animations', group: 'Modern Angular entry/exit', title: 'animate.leave',
    description: 'Remove a notice gracefully before Angular deletes it.',
    memoryHook: 'Leave = curtain closes before removal.', action: 'Hide and show the notification.',
    expected: 'The notice fades out before removal, rather than instantly disappearing.',
    code: '@if (visible()) { <article animate.leave="lab-leave">Notice</article> }'
  },
  {
    id: 'fade', category: 'animations', group: 'CSS transitions', title: 'Fade transition',
    description: 'Change opacity while the element remains in the DOM.',
    memoryHook: 'Opacity controls visibility, not existence.', action: 'Toggle opacity.',
    expected: 'The card smoothly fades between opaque and translucent.',
    code: '<div [class.lab-faded]="!active()">Same DOM element</div>\n// CSS: transition: opacity .4s ease'
  },
  {
    id: 'slide', category: 'animations', group: 'CSS transitions', title: 'Slide transition',
    description: 'Move a status panel horizontally on click.',
    memoryHook: 'Transform moves a box without rebuilding it.', action: 'Slide the panel.',
    expected: 'The panel travels horizontally and returns.',
    code: '<article [class.lab-shifted]="active()">Moving panel</article>\n// CSS: transition: transform .45s ease'
  },
  {
    id: 'scale', category: 'animations', group: 'CSS transitions', title: 'Scale transition',
    description: 'Grow and shrink a priority indicator.',
    memoryHook: 'scale() zooms without changing the document layout.', action: 'Toggle zoom.',
    expected: 'The indicator scales smoothly.',
    code: '<div [class.lab-scaled]="active()">Priority badge</div>'
  },
  {
    id: 'hoverlift', category: 'animations', group: 'Interactive CSS animations', title: 'Hover lift',
    description: 'Elevate a complaint card when the pointer enters.',
    memoryHook: 'Hover is an invitation, not a navigation event.', action: 'Hover the card (or focus using Tab).',
    expected: 'The card lifts and its shadow increases.',
    code: '<article class="lab-hover-card" tabindex="0">Hover or focus</article>'
  },
  {
    id: 'toast', category: 'animations', group: 'Notifications', title: 'Animated notification',
    description: 'Display and dismiss an animated completion notice.',
    memoryHook: 'A notification is a short-lived scene.', action: 'Show or dismiss the toast.',
    expected: 'The toast enters and leaves with a transition.',
    code: '@if (visible()) { <div animate.enter="lab-enter" animate.leave="lab-leave">Saved!</div> }'
  },
  {
    id: 'stagger', category: 'animations', group: 'List transitions', title: 'Staggered list entrance',
    description: 'Render sample issues with small incremental CSS animation delays.',
    memoryHook: 'One list, several entrances.', action: 'Rebuild the list.',
    expected: 'List cards appear with staggered entrance timing.',
    code: '@for (issue of issues(); track issue.id; let i = $index) { <li class="lab-stagger" [style.animation-delay.ms]="i * 110">{{ issue.title }}</li> }'
  }
] as const;

export function categoryById(id: string | null): LabCategory | undefined {
  return LAB_CATEGORIES.find(category => category.id === id);
}
export function topicsForCategory(id: string | null): readonly LabTopic[] {
  return LAB_TOPICS.filter(topic => topic.category === id);
}
export function topicById(category: string | null, id: string | null): LabTopic | undefined {
  return LAB_TOPICS.find(topic => topic.category === category && topic.id === id);
}

