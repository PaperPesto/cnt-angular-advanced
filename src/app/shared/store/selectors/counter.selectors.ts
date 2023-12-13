import {createSelector} from '@ngrx/store';
import {counterFeature} from '../reducers/counter.reducer';


export const counterValueLabelSelector = createSelector(
  counterFeature.selectValue,
  counterFeature.selectLabel,
  (v, l) => {
    return `${l}-${v}`;
})
