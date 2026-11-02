import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { LAB_CATEGORIES, LAB_TOPICS, categoryById, topicsForCategory } from './lab.catalog';

/** Screen 1 — exactly three clickable cards, each linked to its own topic list. */
@Component({ standalone: true, imports: [RouterLink], templateUrl: './lab-home.html' })
export class LabHome {
  readonly categories = LAB_CATEGORIES;
  readonly total = LAB_TOPICS.length;
  count(id: string): number { return LAB_TOPICS.filter(topic => topic.category === id).length; }
}

/** Screen 2 — real Angular router links, generated directly from the module catalogue. */
@Component({ standalone: true, imports: [RouterLink], templateUrl: './lab-category.html' })
export class LabCategory {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  readonly category = computed(() => categoryById(this.params().get('category')));
  readonly topics = computed(() => topicsForCategory(this.params().get('category')));
}

