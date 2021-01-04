// @flow

import type { Ingredient } from '../../components/Burger/BurgerIngredient';

import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from '../actionTypes';

type AddIngredientsActionType = {
  type: 'ADD_INGREDIENTS',
  payload: {
    ingredientName: string,
  },
};

type RemoveIngredientsActionType = {
  type: 'REMOVE_INGREDIENTS',
  payload: {
    ingredientName: string,
  },
};

type SetIngredientsActionType = {
  type: 'SET_INGREDIENTS',
  payload: {
    ingredients: Ingredient[],
  },
};

type FetchIngredientsFaildActionType = {
  type: 'FETCH_INGREDIENTS_FAILED',
};

export const addIngredient = (
  ingredientName: string,
): AddIngredientsActionType => ({
  type: ADD_INGREDIENTS,
  payload: {
    ingredientName,
  },
});

export const removeIngredient = (
  ingredientName: string,
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
