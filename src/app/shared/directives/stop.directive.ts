import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[ngStop]'
})
export class StopDirective {
  @HostListener('click', ['$event']) clicked(e: Event) {
    e.stopPropagation();
  }
}
