import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS
} from "../actionTypes";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0
};

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 20,
  meat: 40,
  bacon: 25
};

export const ingredients = (
  state = initialState,
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]:
            state.ingredients[action.ingredientName] + 1
        },
        totalPrice:
          state.totalPrice +
          INGREDIENT_PRICES[action.ingredientName]
      };
    case REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]:
            state.ingredients[action.ingredientName] - 1
        },

        totalPrice:
          state.totalPrice -
          INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};
