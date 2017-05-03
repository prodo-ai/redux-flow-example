// @flow

import type {State} from "../reducer";

import Counter from "../components/Counter";
import {decrement, increment} from "../counter";
import {connect} from "react-redux";

export const connectCounter = () =>
  connect((state: State) => ({counter: state.counter}), {
    increment,
    decrement,
  });

export const createConnectedCounter = () => connectCounter()(Counter);

export default createConnectedCounter();
