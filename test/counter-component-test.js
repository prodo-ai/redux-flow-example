// @flow

import Counter from "../src/components/Counter";
import test from "ava";
import {shallow} from "enzyme";
import * as React from "react";
import td from "testdouble";

test.beforeEach(t => {
  t.context.actions = {
    increment: td.function("actions.increment"),
    decrement: td.function("actions.decrement"),
  };
});

test("Counter renders the counting value", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={10}
    />,
  );
  const counter = wrapper.find("#value");
  t.is(counter.length, 1);
  t.is(counter.text(), "10");
});

test("Counter renders a counter", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  t.is(wrapper.find("#value").length, 1);
});

test("It renders 6 buttons", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  t.is(wrapper.find("button").length, 6);
});

test("Clicking +1 causes an increment action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-increment-one");
  button.simulate("click");
  td.verify(t.context.actions.increment(1));
  t.pass();
});

test("Clicking +5 causes an increment action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-increment-five");
  button.simulate("click");
  td.verify(t.context.actions.increment(5));
  t.pass();
});

test("Clicking +10 causes an increment action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-increment-ten");
  button.simulate("click");
  td.verify(t.context.actions.increment(10));
  t.pass();
});

test("Clicking -1 causes a decrement action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-decrement-one");
  button.simulate("click");
  td.verify(t.context.actions.decrement(1));
  t.pass();
});

test("Clicking -5 causes a decrement action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-decrement-five");
  button.simulate("click");
  td.verify(t.context.actions.decrement(5));
  t.pass();
});

test("Clicking -10 causes a decrement action", async t => {
  const wrapper = shallow(
    <Counter
      increment={t.context.actions.increment}
      decrement={t.context.actions.decrement}
      counter={0}
    />,
  );
  const button = wrapper.find("#button-decrement-ten");
  button.simulate("click");
  td.verify(t.context.actions.decrement(10));
  t.pass();
});
