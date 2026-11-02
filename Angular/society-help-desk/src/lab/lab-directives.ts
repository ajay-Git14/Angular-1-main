import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, inject } from '@angular/core';

/**
 * Module 03 — reusable attribute directive.
 * Renderer2 modifies a host element without reaching into the DOM with querySelector.
 */
@Directive({ selector: '[appHoverHighlight]', standalone: true })
export class HoverHighlightDirective {
  @Input('appHoverHighlight') color = '#dbeafe';

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.renderer.removeStyle(this.element.nativeElement, 'background-color');
  }
}

/**
 * Module 03 — HostBinding demonstrates a directive-owned host class & attribute.
 * A priority binding changes appearance while keeping the host's original text.
 */
@Directive({ selector: '[appPriority]', standalone: true })
export class PriorityDirective {
  @Input('appPriority') priority: 'Low' | 'Medium' | 'High' = 'Low';

  @HostBinding('class.lab-priority-low') get low(): boolean { return this.priority === 'Low'; }
  @HostBinding('class.lab-priority-medium') get medium(): boolean { return this.priority === 'Medium'; }
  @HostBinding('class.lab-priority-high') get high(): boolean { return this.priority === 'High'; }
  @HostBinding('attr.data-priority') get value(): string { return this.priority; }
}

