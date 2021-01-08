// @flow

import type { Ingredient } from '../../components/Burger/BurgerIngredient';
import type { Actions } from '../actions';

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
  'bread-top': 0,
  'bread-bottom': 0,
};

export type IngredientsState = {
  ingredients: Ingredient[],
  totalPrice: number,
  error: boolean,
  building: boolean,
};

export const ingredients = (
  state: IngredientsState = initialState,
  action: Actions,
): IngredientsState => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [action.payload.ingredientName, ...state.ingredients],
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
        building: true,
      };

    case REMOVE_INGREDIENTS:
      // TODO: сделать лучше
      const copiedIngredients = [...state.ingredients];
      const index = copiedIngredients.findIndex(
        (v) => v === action.payload.ingredientName,
      );

      if (index > -1) {
        copiedIngredients.splice(index, 1);
        return {
          ...state,
          ingredients: copiedIngredients,
          totalPrice:
            state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName],
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
