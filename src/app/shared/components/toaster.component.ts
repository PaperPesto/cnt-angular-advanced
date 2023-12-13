import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng-toaster',
  template: `
    <div class="toaster" *ngIf="visible">
      <i class="fa fa-times" (click)="close.emit()"></i>
      <div class="message">{{message}}</div>
      <div class="prog" [style.width.%]="progress"></div>
    </div>
  `,
  styles: []
})
export class ToasterComponent {
  @Input() visible: boolean = false;
  @Input() message: string | undefined = 'pippo';
  @Input() progress: number = 0;
  @Output() close = new EventEmitter();
}
