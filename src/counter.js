export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = delta => ({
  type: INCREMENT,
  payload: delta,
});

export const decrement = delta => ({
  type: DECREMENT,
  payload: delta,
});

const initialState = 0;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
