import { INCREMENT, DECREMENT } from "./types";

export const incrementBy = by => {
  return {
    type: INCREMENT,
    payload: by
  };
};

export const decrementBy = by => {
  return {
    type: DECREMENT,
    payload: by
  };
};
