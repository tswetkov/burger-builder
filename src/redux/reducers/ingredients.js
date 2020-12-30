import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  SET_INGREDIENTS,
} from '../actionTypes';

const initialState = {
  ingredients: [],
  totalPrice: 0,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 20,
  meat: 40,
  bacon: 25,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [action.ingredientName, ...state.ingredients],
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };

    case REMOVE_INGREDIENTS:
      // TODO: сделать лучше
      const copiedIngredients = [...state.ingredients];
      const index = copiedIngredients.findIndex(
        (v) => v === action.ingredientName,
      );

      if (index > -1) {
        copiedIngredients.splice(index, 1);
        return {
          ...state,
          ingredients: copiedIngredients,
          totalPrice:
            state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        };
      }

      return state;

    case SET_INGREDIENTS:
      return {
        ...state,
        totalPrice: 0,
        ingredients: [],
        error: false,
        building: false,
      };

    case FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
