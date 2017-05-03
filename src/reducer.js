// @flow

import {reducer as counterReducer} from "./counter";
import {combineReducers} from "redux";

export const reducer = combineReducers({
  counter: counterReducer,
});
