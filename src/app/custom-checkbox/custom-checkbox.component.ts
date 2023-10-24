import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor {
  @Input()
  isDisabled: boolean = false;
  @Input()
  label: string = '';
  @Input()
  checked: boolean = false;

  @Output() checkboxChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(checked: boolean): void {
    this.checked = checked;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  valueChanged(value: boolean) {
    this.onChange(value);
    this.onChange(value);
    this.checkboxChanged.emit(value);
  }
}
