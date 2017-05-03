import {increment} from "../src/counter";
import {setupRedux} from "../src/store";
import test from "ava";

test.beforeEach(async t => {
  t.context.store = setupRedux();
});

test.cb("Counter has connected increment action", t => {
  t.context.store.subscribe(() => {
    if (t.context.store.getState().counter === 1) {
      t.end();
    }
  });
  t.context.store.dispatch(increment(1));
});
