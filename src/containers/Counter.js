// @flow

import type {Props} from "../components/Counter";
import type {State} from "../reducer";
import type {Connector} from "react-redux";

import Counter from "../components/Counter";
import {decrement, increment} from "../counter";
import {connect} from "react-redux";

export const connectCounter = (): Connector<{}, Props> =>
  connect((state: State) => ({counter: state.counter}), {
    increment,
    decrement,
  });

export const createConnectedCounter = () => connectCounter()(Counter);

export default createConnectedCounter();
