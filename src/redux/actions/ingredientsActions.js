import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "../actionTypes";

export const addIngredient = () => {
  return {
    type: ADD_INGREDIENTS
  };
};

export const removeIngredient = () => {
  return {
    type: REMOVE_INGREDIENTS
  };
};
