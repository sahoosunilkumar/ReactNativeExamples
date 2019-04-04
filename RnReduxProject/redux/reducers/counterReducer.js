import { INCREMENT, DECREMENT } from "../actions/types";

const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: Number(state.counter) + Number(action.payload)
      };
    case DECREMENT:
      return {
        ...state,
        counter: Number(state.counter) - Number(action.payload)
      };
    default:
      return state;
  }
};

export default counterReducer;
