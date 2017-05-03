// @flow

import type {CounterState} from "./counter";
import type {Action} from "./types";
import type {Reducer} from "redux";

import {reducer as counterReducer} from "./counter";
import {combineReducers} from "redux";

export type State = {
  counter: CounterState,
};

export const reducer: Reducer<State, Action<any, any>> = combineReducers({
  counter: counterReducer,
});
