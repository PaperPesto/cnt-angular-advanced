import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng-counter',
  template: `
    <div class="counter">
      <button class="btn btn-primary" (click)="down()">
        <i class="fa fa-arrow-down"></i>
      </button>
      <input type="text" class="form-control" [ngModel]="value">
      <button class="btn btn-primary" (click)="up()">
        <i class="fa fa-arrow-up"></i>
      </button>
    </div>
  `,
  styles: [
    `input {
      text-align: end;
    }`
  ]
})
export class CounterComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  public up() {
    this.valueChange.emit(this.value + 1);
  }

  public down() {
    this.valueChange.emit(this.value - 1);
  }
}
