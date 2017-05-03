import Counter from "../components/Counter";
import {decrement, increment} from "../counter";
import {connect} from "react-redux";

export const connectCounter = () =>
  connect(state => ({counter: state.counter}), {increment, decrement})(Counter);

export default connectCounter();
