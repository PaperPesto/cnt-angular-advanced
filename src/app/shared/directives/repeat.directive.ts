import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngRepeat]'
})
export class RepeatDirective implements OnInit{
  @Input() ngRepeatFrom!: number;
  @Input() ngRepeatTo!: number;

  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    const count = this.ngRepeatTo - this.ngRepeatFrom;
    console.log(count);
    for (let i = this.ngRepeatFrom; i < this.ngRepeatTo; i++) {
      this.vcr.createEmbeddedView(this.tr, {
        $implicit: i,
        odd: i % 2 !== 0,
        even: i % 2 === 0,
        'ngRepeat': count
      });
    }
  }

}
