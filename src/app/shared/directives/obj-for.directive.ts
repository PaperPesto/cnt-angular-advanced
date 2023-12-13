import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngObjFor]'
})
export class ObjForDirective implements OnInit{
  @Input() ngObjForOf!: any

  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit(): void {
    for (const k   in this.ngObjForOf) {
      this.vcr.createEmbeddedView(this.tr, {$implicit: this.ngObjForOf[k]});
    }
  }

}
