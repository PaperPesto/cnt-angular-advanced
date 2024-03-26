import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  booleanAttribute,
} from '@angular/core';

@Directive({
  selector: '[ngDialog]',
})
export class DialogDirective {
  @Input({ required: true, transform: booleanAttribute }) set ngDialog(
    value: boolean
  ) {
    if (!!value) {
      this.element.nativeElement.showModal();
    } else {
      this.element.nativeElement.close();
    }
  }

  constructor(private element: ElementRef<HTMLDialogElement>) {}
}
