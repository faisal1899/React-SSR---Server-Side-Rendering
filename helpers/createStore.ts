import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export default () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
  );
  return store;
}