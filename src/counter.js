// @flow

import type {Action} from "./types";

export const INCREMENT: "INCREMENT" = "INCREMENT";
export const DECREMENT: "DECREMENT" = "DECREMENT";

export type IncrementAction = Action<typeof INCREMENT, number>;
export type DecrementAction = Action<typeof DECREMENT, number>;
export type CounterAction = IncrementAction | DecrementAction;

export const increment = (delta: number): IncrementAction => ({
  type: INCREMENT,
  payload: delta,
});

export const decrement = (delta: number): DecrementAction => ({
  type: DECREMENT,
  payload: delta,
});

export type CounterState = number;

const initialState = 0;
export const reducer = (
  state: CounterState = initialState,
  action: CounterAction | Action<any, any>,
) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
