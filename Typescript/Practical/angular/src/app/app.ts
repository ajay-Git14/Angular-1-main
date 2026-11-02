// Lab 6-13. Copy into src/app/app.ts of a NEW standalone Angular CLI app.
import {
  Component,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Pipe,
  PipeTransform,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Lab 7: injectable service.
@Injectable({ providedIn: 'root' })
export class UserService {
  welcome(): string {
    return 'Welcome from UserService';
  }
}

// Labs 8 and 9: decorated input and output must be inside a class.
@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>Child title: {{ title }}</p>
    <button type="button" (click)="save.emit()">Save</button>
  `
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() save = new EventEmitter<void>();
}

// Labs 10 and 11: a directive can react to host events.
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') onEnter(): void {
    this.backgroundColor = 'lightyellow';
  }

  @HostListener('mouseleave') onLeave(): void {
    this.backgroundColor = 'transparent';
  }

  @HostListener('click') onClick(): void {
    console.log('Highlighted element clicked');
  }
}

// Lab 12: a pipe must provide transform().
@Pipe({ name: 'currencyFormat', standalone: true })
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);
  }
}

// Lab 13: a classic NgModule example. Declared components must be
// standalone: false; the module can be imported into a standalone app.
@Component({
  selector: 'app-legacy-greeting',
  standalone: false,
  template: '<p>Hello from NgModule component</p>'
})
export class LegacyGreetingComponent {}

@NgModule({
  declarations: [LegacyGreetingComponent],
  imports: [CommonModule],
  exports: [LegacyGreetingComponent]
})
export class LegacyExampleModule {}

// Lab 6: complete root component that exercises every Angular lab.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, HighlightDirective, CurrencyFormatPipe, LegacyExampleModule],
  template: `
    <h1>Angular Decorators Lab</h1>
    <p>{{ welcomeMessage }}</p>
    <app-child [title]="'TypeScript Decorators'" (save)="onSave()" />
    <p>{{ status }}</p>
    <p appHighlight>Hover over or click this highlighted paragraph.</p>
    <p>Formatted price: {{ 1250 | currencyFormat }}</p>
    <app-legacy-greeting />
  `
})
export class App {
  welcomeMessage = inject(UserService).welcome();
  status = 'No save event yet';

  onSave(): void {
    this.status = 'Save event received from child';
  }
}
