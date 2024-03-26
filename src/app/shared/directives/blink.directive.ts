import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngBlink]',
})
export class BlinkDirective {
  private show = false;

  // nativelement potrei customizzarlo ancora di più, tipo button o elementi di android
  constructor(private element: ElementRef<HTMLElement>) {
    setInterval(() => {
      this.show = !this.show;
      const el = this.element.nativeElement;
      if (this.show) {
        el.style.opacity = '1';
      } else {
        el.style.opacity = '0';
      }
    }, 1000);
  }
}
