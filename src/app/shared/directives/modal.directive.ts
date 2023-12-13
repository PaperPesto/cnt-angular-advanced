import {booleanAttribute, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[ngModal]'
})
export class ModalDirective {
  @Input({required: true, transform: booleanAttribute}) set ngModal(value: boolean) {
    if(!!value) {
      this.el.nativeElement.showModal();
    } else {
      this.el.nativeElement.close();
    }
  }
  constructor(private el: ElementRef<HTMLDialogElement>) { }

}
