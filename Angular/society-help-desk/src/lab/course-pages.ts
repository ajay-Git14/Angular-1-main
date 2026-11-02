import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { COURSE_CHAPTERS, chapterById, chapterTopicById, liveDemosForChapter } from './course-catalog';

/** Level 1 /chapters — the entire published Angular 1–11 curriculum. */
@Component({ standalone:true, imports:[RouterLink], templateUrl:'./course-chapters.html' })
export class CourseChapters {
  readonly chapters=COURSE_CHAPTERS;
  readonly liveCount=liveDemosForChapter;
}

/** Level 2 /chapters/:chapter — course topics from actual Markdown files. */
@Component({ standalone:true, imports:[RouterLink], templateUrl:'./course-topics.html' })
export class CourseTopics {
  private readonly route=inject(ActivatedRoute);
  private readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
  readonly chapter=computed(()=>chapterById(this.params().get('chapter')));
  readonly demoCount=(id:string)=>liveDemosForChapter(id);
}

/** Level 3 /chapters/:chapter/:topic — available subtopics and execution status. */
@Component({ standalone:true, imports:[RouterLink], templateUrl:'./course-subtopics.html' })
export class CourseSubtopics {
  private readonly route=inject(ActivatedRoute);
  private readonly params=toSignal(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});
  readonly chapter=computed(()=>chapterById(this.params().get('chapter')));
  readonly topic=computed(()=>chapterTopicById(this.params().get('chapter'),this.params().get('topic')));
}

