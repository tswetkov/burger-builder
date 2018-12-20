import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from "../actionTypes";
import axios from "../../axios-orders";

export const addIngredient = ingredientName => {
  return {
    type: ADD_INGREDIENTS,
    ingredientName
  };
};

export const removeIngredient = ingredientName => {
  return {
    type: REMOVE_INGREDIENTS,
    ingredientName
  };
};

export const setIngredietns = ingredients => {
  return {
    type: SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("/ingredients.json")
      .then(response => {
        return dispatch(setIngredietns(response.data));
      })
      .catch(error => dispatch(fetchIngredientsFailed()));
  };
};
