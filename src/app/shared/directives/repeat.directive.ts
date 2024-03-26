import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngRepeat]',
})
export class RepeatDirective {
  @Input() ngRepeatFrom!: number;
  @Input() ngRepeatTo!: number;

  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngAfterViewInit(){
    console.log(this.ngRepeatFrom, this.ngRepeatTo)
    for (let i = this.ngRepeatFrom; i++; i <= this.ngRepeatTo) {
      this.vcr.createEmbeddedView(this.tr, { value: i });
    }
  }
}
