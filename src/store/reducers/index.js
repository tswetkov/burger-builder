// @flow

import { combineReducers, type Reducer } from 'redux';

import { ingredients, type IngredientsState } from './ingredients';
import { order, type OrderState } from './order';
import { auth, type AuthState } from './auth';
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
