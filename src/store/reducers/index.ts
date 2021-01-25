import { combineReducers } from 'redux';

import { ingredients } from '../slices/ingredientsSlice';
import { order } from '../slices/orderSlice';
import { auth } from '../slices/authSlice';

export const reducers: any = combineReducers({
  ingredients,
  order,
  auth,
});
