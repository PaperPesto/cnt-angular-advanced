import { Directive, Input, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngMyIf]'
})
export class MyIfDirective {
  @Input() ngMyIf = false;

  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) {
    this.vcr.createEmbeddedView(this.tr)
   }

   ngOnChanges(changes: SimpleChanges){
    
   }

}
