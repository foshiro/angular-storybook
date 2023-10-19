import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface RadioOptions {
  value: string | number;
  label: string;
}

@Component({
  selector: 'storybook-radio',
  imports: [CommonModule],
  template: `
  <mat-radio-group aria-label="Select an option">
    <mat-radio-button *ngFor="let option of options" [value]="option.value">{{ option.label }}</mat-radio-button>
  </mat-radio-group>
  `,
})
export default class RadioComponent {
  /**
   * Options list
   *
   * @required
   */
  @Input()
  options: RadioOptions[] = [];
}
