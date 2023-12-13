import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-quit-modal',
  template: `
    <div class="quit-modal">
      <h3>Are you sure you want to quit?</h3>
      <div>
        <button (click)="cancel.emit()">Cancel</button>
        <button (click)="confirmQuit.emit()">Quit</button>
      </div>
    </div>
  `,
  styles: [
    `.quit-modal {
      width: 500px;
      background-color: #239943;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }`,
    `.quit-modal > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: right;
      margin-top: 10px;
    }`,
    `button {
      margin: 0 5px;
    }`
  ]
})
export class QuitModalComponent {
  @Output() cancel = new EventEmitter();
  @Output() confirmQuit = new EventEmitter();

}
