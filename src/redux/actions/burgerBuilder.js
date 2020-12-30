import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from '../actionTypes';

export const addIngredient = (ingredientName) => ({
  type: ADD_INGREDIENTS,
  ingredientName,
});

export const removeIngredient = (ingredientName) => ({
  type: REMOVE_INGREDIENTS,
  ingredientName,
});

export const setIngredietns = (ingredients) => ({
  type: SET_INGREDIENTS,
  ingredients,
});

export const fetchIngredientsFailed = () => ({
  type: FETCH_INGREDIENTS_FAILED,
});
