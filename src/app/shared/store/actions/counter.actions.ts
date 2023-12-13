import {Action, createAction, createActionGroup, emptyProps, props} from '@ngrx/store';


export const counterActions = createActionGroup({
  source: 'counter',
  events: {
    'increment': emptyProps(),
    'decrement': emptyProps(),
    'set value': props<{value: number}>(),
    'set label': props<{value: string}>()
  }
})
// export const increment = createAction('[counter] increment');
// // export const increment: Action = {
// //   type: '[counter] increment'
// // };
//
// export const decrement = createAction('[counter] increment');

// export const decrement: Action = {
//   type: '[counter] decrement'
// };

// export function setValue(value: number): Action & {value: number} {
//   return {
//     type: '[counter] set value',
//     value
//   }
//
//
// }
