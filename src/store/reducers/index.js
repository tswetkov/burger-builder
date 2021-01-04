// @flow

import { combineReducers } from 'redux';

import { ingredients } from './ingredients';
import { order } from './order';
import { auth } from './auth';

// TODO: определить тип
export const reducers: any = combineReducers({
  ingredients,
  order,
  auth,
});
