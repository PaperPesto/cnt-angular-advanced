import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng-rate-item',
  template: `
    <i class="fa fa-star" [class.on]="currentValue >= value" (click)="clicked.emit()"></i>
  `,
  styles: [
    `i {
      font-size: 80px;
    }`,
    `.on {
      color: #dbac00;
    }`
  ]
})
export class RateItemComponent {
  @Input() value!: number;
  @Input() currentValue!: number;
  @Output() clicked = new EventEmitter();

}
