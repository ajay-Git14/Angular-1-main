import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HoverHighlightDirective, PriorityDirective } from './lab-directives';
import { StatusLabelPipe } from './lab-status.pipe';
import { categoryById, topicById, topicsForCategory } from './lab.catalog';
import { chapterById, chapterTopicById, courseSubtopicById } from './course-catalog';

type DemoPriority = 'Low' | 'Medium' | 'High';
type DemoRole = 'Resident' | 'Staff' | 'Admin';
type DemoStatus = 'Open' | 'In Progress' | 'Resolved';
type Issue = { id: number; title: string };

/** Screen 3: dynamic output changes for every lesson, not a static screenshot. */
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, HoverHighlightDirective, PriorityDirective, StatusLabelPipe],
  templateUrl: './lab-demo.html'
})
export class LabDemo {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  // Level 4 of the new Chapter -> Topic -> Subtopic -> Execution navigation.
  // We reuse the real lab template for Chapter 03 rather than making fake demos.
  readonly chapter = computed(() => chapterById(this.params().get('chapter')));
  readonly courseTopic = computed(() =>
    chapterTopicById(this.params().get('chapter'), this.params().get('topic')));
  readonly courseSubtopic = computed(() =>
    courseSubtopicById(this.params().get('chapter'), this.params().get('topic'), this.params().get('subtopic')));

  // Keep old /lab/:category/:topic deep links working for existing students.
  readonly category = computed(() => categoryById(
    this.params().has('chapter') ? this.courseSubtopic()?.category ?? null : this.params().get('category')
  ));
  readonly topic = computed(() => {
    if (this.params().has('chapter')) {
      const selected = this.courseSubtopic();
      return selected?.kind === 'live' ? topicById(selected.category ?? null, selected.id) : undefined;
    }
    return topicById(this.params().get('category'), this.params().get('topic'));
  });
  readonly siblings = computed(() => topicsForCategory(this.params().get('category')));
  readonly nextTopic = computed(() => {
    const siblings = this.siblings();
    const position = siblings.findIndex(item => item.id === this.topic()?.id);
    return position >= 0 ? siblings[position + 1] : undefined;
  });
  readonly nextCourseSubtopic = computed(() => {
    const siblings = this.courseTopic()?.subtopics ?? [];
    const position = siblings.findIndex(item => item.id === this.courseSubtopic()?.id);
    return position >= 0 ? siblings[position + 1] : undefined;
  });

  // DIRECTIVES: changing each signal updates the bindings in the template.
  readonly highPriority = signal(false);
  readonly fontSize = signal(22);
  readonly acknowledged = signal(false);
  readonly submitted = signal(false);
  readonly showAlert = signal(true);
  readonly complaints = signal<Issue[]>([
    { id: 1, title: 'Lift repair - Block A' },
    { id: 2, title: 'Water supply - Block B' }
  ]);
  readonly role = signal<DemoRole>('Resident');
  readonly priority = signal<DemoPriority>('Medium');

  // PIPES: the raw values never need to be overwritten with formatted text.
  readonly complaintTitle = signal('lift needs REPAIR');
  readonly buildingName = signal('BLOCK A North Wing');
  readonly residentName = signal('aARav shARMa');
  readonly amount = signal(12450);
  readonly currencyCode = signal('INR');
  readonly selectedDate = signal('2026-10-22');
  readonly completion = signal(70);
  readonly complaintStatus = signal<DemoStatus>('Open');
  readonly categories = ['Water', 'Lifts', 'Cleaning', 'Security', 'Electricity', 'Parking'];
  readonly visibleCount = signal(3);
  readonly longMessage = signal('society maintenance request needs review');
  readonly complaintObject = computed(() => ({
    id: 'SHD-101', title: this.complaintTitle(), status: this.complaintStatus()
  }));

  // ANIMATIONS: class transitions preserve DOM; animate.enter/leave use create/remove.
  readonly visible = signal(true);
  readonly active = signal(false);
  readonly animationRun = signal(0);
  readonly issues: readonly Issue[] = [
    { id: 101, title: 'Gate access' }, { id: 102, title: 'Lift service' },
    { id: 103, title: 'Water pump' }, { id: 104, title: 'Common lighting' }
  ];

  readValue(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement).value;
  }
  readNumber(event: Event): number {
    return Number(this.readValue(event));
  }
  readChecked(event: Event): boolean {
    return (event.target as HTMLInputElement).checked;
  }
  addComplaint(): void {
    this.complaints.update(items => [
      ...items, { id: items.reduce((max, item) => Math.max(max, item.id), 0) + 1,
        title: 'New demo maintenance request' }
    ]);
  }
  submitDemo(): void {
    if (this.acknowledged()) this.submitted.set(true);
  }
  replayStagger(): void {
    // Tracking the generation forces Angular to create fresh nodes, replaying CSS.
    this.animationRun.update(value => value + 1);
  }

  reset(): void {
    this.highPriority.set(false);
    this.fontSize.set(22);
    this.acknowledged.set(false);
    this.submitted.set(false);
    this.showAlert.set(true);
    this.complaints.set([
      { id: 1, title: 'Lift repair - Block A' },
      { id: 2, title: 'Water supply - Block B' }
    ]);
    this.role.set('Resident');
    this.priority.set('Medium');
    this.complaintTitle.set('lift needs REPAIR');
    this.buildingName.set('BLOCK A North Wing');
    this.residentName.set('aARav shARMa');
    this.amount.set(12450);
    this.currencyCode.set('INR');
    this.selectedDate.set('2026-10-22');
    this.completion.set(70);
    this.complaintStatus.set('Open');
    this.visibleCount.set(3);
    this.longMessage.set('society maintenance request needs review');
    this.visible.set(true);
    this.active.set(false);
    this.replayStagger();
  }
}

