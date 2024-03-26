import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public items: Array<number> = [];
  public value = 0;
  show = false;
  // @ViewChild('dlg') dlg!: ElementRef<HTMLDialogElement>

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push(i);
    }
  }

  openDialog(){
    // this.dlg.nativeElement.showModal();
    this.show = true
  }
}
