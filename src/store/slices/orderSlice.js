// @flow

import { createSlice } from '@reduxjs/toolkit';

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

export type OrderState = {
  orders: Order[],
  loading: boolean,
  purchased: boolean,
};

const initialState: OrderState = {
  orders: [],
  loading: false,
  purchased: false,
};

const orderSlice: any = createSlice({
  name: 'order',
  initialState,
  reducers: {
    purchaseInit(state) {
      return {
        ...state,
        purchased: false,
      };
    },

    purchaseBurgerStart(state) {
      return {
        ...state,
        loading: true,
      };
    },

    purchaseBurgerSuccess(state, action) {
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
    },

    purchaseBurgerFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },

    fetchOrdersStart(state) {
      return {
        ...state,
        loading: true,
      };
    },

    fetchOrdersSuccess(state, action) {
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
    },

    fetchOrdersFailure(state) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const {
  reducer: order,
  actions: {
    purchaseInit,
    purchaseBurgerStart,
    purchaseBurgerSuccess,
    purchaseBurgerFailure,
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFailure,
  },
} = orderSlice;
