import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[ngOddEven]'
})
export class OddEvenDirective implements OnInit {
  @Input() ngOddEven!: number;
  @HostBinding('style.background-color') color: string | undefined;

  ngOnInit(): void {
    this.color = this.ngOddEven % 2 === 0 ? 'red' : 'blue';
  }

}
