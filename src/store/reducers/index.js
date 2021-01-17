// @flow

import { combineReducers, type Reducer } from 'redux';

import { ingredients, type IngredientsState } from '../slices/ingredientsSlice';
import { order, type OrderState } from '../slices/orderSlice';
import { auth, type AuthState } from '../slices/authSlice';
import type { Actions } from '../actions';

export type State = {
  ingredients: IngredientsState,
  order: OrderState,
  auth: AuthState,
};

export const reducers: Reducer<State, Actions> = combineReducers({
  ingredients,
  order,
  auth,
});
