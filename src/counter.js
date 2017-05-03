// @flow

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = (delta: any) => ({
  type: INCREMENT,
  payload: delta,
});

export const decrement = (delta: any) => ({
  type: DECREMENT,
  payload: delta,
});

const initialState = 0;
export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
