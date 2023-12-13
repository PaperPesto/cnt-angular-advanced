import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ng-rate',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RateComponent),
    multi: true
  }],
  template: `
    <ng-rate-item
      *ngRepeat="let i from 1 to 6"
      [value]="i"
      [currentValue]="pippo"
      (clicked)="changed(i)"></ng-rate-item>
  `,
  styles: [
  ]
})
export class RateComponent implements ControlValueAccessor{
  @Input() pippo!: number;
  @Output() pippoChange = new EventEmitter<number>();
  private onChange!: (value: number) => void;
  private onTouched!: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: number): void {
    this.pippo = obj;
  }

  public changed(value: number) {
    this.pippo = value;
    this.onChange(value);
    this.onTouched();
  }
}
