import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-box',
  template: `
    <h1 [ngStyle]="{'background-color': item % 2 === 0 ? 'red' : 'blue'}" class="number">{{item}}</h1>
  `,
  styles: [
  ]
})
export class BoxComponent {
  @Input() item!: number;
}
