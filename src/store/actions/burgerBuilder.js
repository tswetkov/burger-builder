// @flow

import type { Ingredient } from '../../components/Burger/BurgerIngredient';

import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  SET_INGREDIENTS,
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

export type SetIngredientsActionType = {
  type: 'SET_INGREDIENTS',
  payload: {
    ingredients: Ingredient[],
  },
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

export const setIngredietns = (
  ingredients: Ingredient[],
): SetIngredientsActionType => ({
  type: SET_INGREDIENTS,
  payload: {
    ingredients,
  },
});

export const fetchIngredientsFailed = (): FetchIngredientsFaildActionType => ({
  type: FETCH_INGREDIENTS_FAILED,
});
