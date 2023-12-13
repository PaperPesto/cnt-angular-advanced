import {Action, createFeature, createReducer, on} from '@ngrx/store';
import {counterActions} from '../actions/counter.actions';

export interface CounterState {
  value: number,
  label: string,
  config: Array<any>
}

const INITIAL_STATE: CounterState = {
  value: 0,
  label: 'pippo',
  config: []
}

const counterReducer = createReducer(
  INITIAL_STATE,
  on(counterActions.increment, (state) => ({...state, value: state.value + 1})),
  on(counterActions.decrement, (state) => ({...state, value: state.value - 1})),
  on(counterActions.setValue, (state, {value}) => ({...state, value})),
  on(counterActions.setLabel, (state, {value}) => ({...state, label: value})),
  );


export const counterFeature = createFeature({
  name: 'counter',
  reducer: counterReducer
});

