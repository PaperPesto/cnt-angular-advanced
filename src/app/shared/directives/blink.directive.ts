import {Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, map, Subject, Subscription, switchMap, takeUntil} from 'rxjs';


@Directive({
  selector: '[ngBlink]',
})
export class BlinkDirective implements OnInit, OnChanges, OnDestroy {
  @Input() ngBlink: string = '1000';
  @HostBinding('style.opacity') opacity: any;
  private time$ = new Subject<string>();
  private subject = new Subject();

  constructor(private el: ElementRef<HTMLElement>) {}



  ngOnInit(): void {

    this.time$.pipe(
        switchMap(time => interval(Number(time))),
        takeUntil(this.subject),
        map(x => x % 2 === 0))
      .subscribe(x => {
        this.opacity = x ? '1' : '0';
        console.log('aaaa');
      });

    this.time$.next(this.ngBlink);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.time$.next(this.ngBlink);
  }

  ngOnDestroy(): void {
    this.subject.next(undefined);
    this.subject.complete();
  }
}
