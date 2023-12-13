import { Component } from '@angular/core';

@Component({
  selector: 'ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public items: Array<number> = [];
  public value = 0;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push(i);
    }
  }

}
