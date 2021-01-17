// @flow

import { createSlice } from '@reduxjs/toolkit';
import type { Ingredient } from '../../components/Burger/BurgerIngredient';

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

export const ingredientsSlice: any = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient(state, action) {
      return {
        ...state,
        ingredients: [action.payload, ...state.ingredients],
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
        building: true,
      };
    },
    removeIngredient(state, action) {
      // TODO: сделать лучше
      const copiedIngredients = [...state.ingredients];
      const index = copiedIngredients.findIndex((v) => v === action.payload);

      if (index > -1) {
        copiedIngredients.splice(index, 1);
        return {
          ...state,
          ingredients: copiedIngredients,
          totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
        };
      }

      return state;
    },
    resetIngredietns() {
      return initialState;
    },
    fetchIngredientsFailed(state) {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export const {
  reducer: ingredients,
  actions: {
    addIngredient,
    removeIngredient,
    resetIngredietns,
    fetchIngredientsFailed,
  },
} = ingredientsSlice;
