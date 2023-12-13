import { Component } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  template: `
    <div (click)="panelClick()">
      <button (click)="oneClick($event)" ngStop>One</button>
      <button ngStop (click)="twoClick()">Two</button>
      <button ngStop (click)="threeClick()">Three</button>
    </div>
  `,
  styles: [
    `div {
      background-color: #04c3ef;
      width: 800px;
      padding: 50px;
      margin: 40px;
    }`,
    `button {
      width: 200px;
      height: 80px;
      background-color: #ae0606;
      font-size: 40px;
      margin: 20px;
    }`,
    `:host {
      display: block;
      background-color: blueviolet;

    }`
  ]
})
export class ButtonPanelComponent {
  public panelClick() {
    console.log('panel click');
  }

  public oneClick(e: Event) {
    // e.stopPropagation();
    console.log('one click');
  }

  public twoClick() {
    console.log('two click');
  }

  public threeClick() {
    console.log('three click');
  }
}
