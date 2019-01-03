import { put } from "redux-saga/effects";
import axios from "../../axios-orders";

import { fetchIngredientsFailed, setIngredietns } from "../actions/burgerBuilder";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get("/ingredients.json");
    yield put(setIngredietns(response.data));
  } catch (error) {
    yield put(fetchIngredientsFailed());
  }
}
