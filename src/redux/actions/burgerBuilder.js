import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  INIT_INGREDIENTS
} from "../actionTypes";

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
  return {
    type: INIT_INGREDIENTS
  };
};
