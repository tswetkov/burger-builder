// @flow

import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from '../actionTypes';

import type { Actions } from '../actions';
import type { Ingredient } from '../../components/Burger/BurgerIngredient';

type Order = {
  id: string,
  ingredients: Ingredient[],
  orderData: {
    country: string,
    deliveryMethod: string,
    email: string,
    index: string,
    name: string,
    street: string,
  },
  price: number,
  userId: string,
};

type State = {
  orders: Order[],
  loading: boolean,
  purchased: boolean,
};

const initialState: State = {
  orders: [],
  loading: false,
  purchased: false,
};

export const order = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.id,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case PURCHASE_BURGER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
