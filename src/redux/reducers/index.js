import { combineReducers } from "redux";

import { ingredients } from "./ingredients";
import { order } from "./order";
import { auth } from "./auth";

export const reducers = combineReducers({
  ingredients,
  order,
  auth
});
