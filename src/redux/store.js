import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, componseEnhancers(applyMiddleware(thunk)));
