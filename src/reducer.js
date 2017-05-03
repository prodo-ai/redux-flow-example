// @flow

import type {CounterState} from "./counter";

import {reducer as counterReducer} from "./counter";
import {combineReducers} from "redux";

export type State = {
  counter: CounterState,
};

export const reducer = combineReducers({
  counter: counterReducer,
});
