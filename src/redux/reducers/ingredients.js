import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  SET_INGREDIENTS
} from "../actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 0,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 20,
  meat: 40,
  bacon: 25
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },

        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false
      };
    case FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};
