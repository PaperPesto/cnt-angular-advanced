import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {counterActions} from '../../shared/store/actions/counter.actions';
import {counterFeature} from '../../shared/store/reducers/counter.reducer';
import {counterValueLabelSelector} from '../../shared/store/selectors/counter.selectors';

type myToken = string | Array<string>;

@Component({
  selector: 'ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  public count = 0;
  public count$ = this.store.select(counterFeature.selectValue);
  public label$ = this.store.select(counterFeature.selectLabel);
  public counterState$ = this.store.select(counterFeature.selectCounterState);
  public pippo$ = this.store.select(counterValueLabelSelector);

  constructor(private store: Store) {

    // const ciccio = this.store.pipe(
    //   map((x: any) => x.counter.label),
    //   distinctUntilChanged(),
    //   tap(x => console.log('aaaa'))
    // )
    //
    // ciccio.subscribe(x => {
    //   console.log('label 2', x);
    // });
    //
    // ciccio.subscribe(x => {
    //   console.log('label 3', x);
    // });


    this.count$.subscribe(x => {
      console.log('count', x);
    });

    this.label$.subscribe(x => {
      console.log('label', x);
    });

    this.label$.subscribe(x => {
      console.log('label 2', x);
    });
  }

  public up() {
    this.store.dispatch(counterActions.increment());
  }

  public down() {
    this.store.dispatch(counterActions.decrement());
  }

  public rnd() {
    const value = Math.random().toString();
    this.store.dispatch(counterActions.setLabel({value}));
  }

}
