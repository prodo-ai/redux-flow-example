// @flow

import Counter from "./containers/Counter";
import {setupRedux} from "./store";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

const store = setupRedux();

const startReact = () =>
  render(
    <Provider store={store}><Counter /></Provider>,
    document.getElementById("root"),
  );

startReact();
