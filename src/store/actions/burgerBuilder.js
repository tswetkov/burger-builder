// @flow

import type { Ingredient } from '../../components/Burger/BurgerIngredient';

import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  RESET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from '../actionTypes';

export type AddIngredientsActionType = {
  type: 'ADD_INGREDIENTS',
  payload: {
    ingredientName: Ingredient,
  },
};

export type RemoveIngredientsActionType = {
  type: 'REMOVE_INGREDIENTS',
  payload: {
    ingredientName: Ingredient,
  },
};

export type ResetIngredientsActionType = {
  type: 'RESET_INGREDIENTS',
};

export type FetchIngredientsFaildActionType = {
  type: 'FETCH_INGREDIENTS_FAILED',
};

export const addIngredient = (
  ingredientName: Ingredient,
): AddIngredientsActionType => ({
  type: ADD_INGREDIENTS,
  payload: {
    ingredientName,
  },
});

export const removeIngredient = (
  ingredientName: Ingredient,
): RemoveIngredientsActionType => ({
  type: REMOVE_INGREDIENTS,
  payload: {
    ingredientName,
  },
});

export const resetIngredietns = (): ResetIngredientsActionType => ({
  type: RESET_INGREDIENTS,
});

export const fetchIngredientsFailed = (): FetchIngredientsFaildActionType => ({
  type: FETCH_INGREDIENTS_FAILED,
});
