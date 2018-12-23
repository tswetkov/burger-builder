import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";

const componseEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

export const store = createStore(
  reducers,
  componseEnhancers(applyMiddleware(thunk))
);
