import { Pipe, PipeTransform } from '@angular/core';

/** A pure pipe transforms a string for display; it does not mutate stored data. */
@Pipe({ name: 'statusLabel', standalone: true, pure: true })
export class StatusLabelPipe implements PipeTransform {
  transform(value: string): string {
    const labels: Record<string, string> = {
      Open: 'Waiting for action',
      'In Progress': 'Team is working',
      Resolved: 'Successfully completed'
    };
    return labels[value] ?? 'Unknown status';
  }
}

