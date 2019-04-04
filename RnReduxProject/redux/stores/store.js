import { createStore, combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";

const rootReducer = combineReducers({
  counterOperation: counterReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
