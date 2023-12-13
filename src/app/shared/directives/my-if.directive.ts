import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngMyIf]'
})
export class MyIfDirective implements OnChanges{
  @Input() ngMyIf: boolean = false;

  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.ngMyIf) {
      this.vcr.createEmbeddedView(this.tr);
    } else {
      this.vcr.clear();
    }
  }

}
