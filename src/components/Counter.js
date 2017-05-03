import * as React from "react";

import "./Counter.less";

export default props => (
  <div className="counter">
    <div className="counter-value">
      {props.counter}
    </div>
    <div className="counter-controls">
      <button className="increment-button" onClick={() => props.increment(10)}>
        +10
      </button>
      <button className="increment-button" onClick={() => props.increment(5)}>
        +5
      </button>
      <button className="increment-button" onClick={() => props.increment(1)}>
        +1
      </button>
      <button className="decrement-button" onClick={() => props.decrement(1)}>
        -1
      </button>
      <button className="decrement-button" onClick={() => props.decrement(5)}>
        -5
      </button>
      <button className="decrement-button" onClick={() => props.decrement(10)}>
        -10
      </button>
    </div>
  </div>
);
