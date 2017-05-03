import {createConnectedCounter} from "../src/containers/Counter";
import {setupRedux} from "../src/store";
import test from "ava";
import {mount} from "enzyme";
import * as React from "react";
import {Provider} from "react-redux";

import "jsdom-global/register";

test.beforeEach(async t => {
  t.context.store = setupRedux();
  t.context.Counter = createConnectedCounter();
});

test("can create connected component", async t => {
  const wrapper = mount(
    <Provider store={t.context.store}><t.context.Counter /></Provider>,
  );
  const button = wrapper.find("#button-increment-one");
  button.simulate("click");
  const value = wrapper.find("#value");
  t.is(value.text(), "1");
});
