// @flow

import * as React from "react";

const counterStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
};

const valueStyle = {
  display: "inherit",
  flexGrow: 1,
  justifyContent: "center",
  flexWrap: "wrap",
  flexBasis: "100%",
  fontSize: "20vw",
};

const controlStyle = {
  display: "flex",
  flexBasis: "100%",
  flexWrap: 1,
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyle = {
  width: "2vw",
  height: "2vw",
};

export default (props: any) => (
  <div id="counter" style={counterStyle}>
    <div id="value" style={valueStyle}>
      {props.counter}
    </div>
    <div id="controls" style={controlStyle}>
      <button
        id="button-increment-ten"
        style={buttonStyle}
        onClick={() => props.increment(10)}
      >
        +10
      </button>
      <button
        id="button-increment-five"
        style={buttonStyle}
        onClick={() => props.increment(5)}
      >
        +5
      </button>
      <button
        id="button-increment-one"
        style={buttonStyle}
        onClick={() => props.increment(1)}
      >
        +1
      </button>
      <button
        id="button-decrement-one"
        style={buttonStyle}
        onClick={() => props.decrement(1)}
      >
        -1
      </button>
      <button
        id="button-decrement-five"
        style={buttonStyle}
        onClick={() => props.decrement(5)}
      >
        -5
      </button>
      <button
        id="button-decrement-ten"
        style={buttonStyle}
        onClick={() => props.decrement(10)}
      >
        -10
      </button>
    </div>
  </div>
);
