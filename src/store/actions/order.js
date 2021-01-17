// @flow

import { PURCHASE_BURGER, FETCH_ORDERS } from '../actionTypes';

export type PurchaseBurgerSuccessActionType = {
  type: 'PURCHASE_BURGER_SUCCESS',
  payload: {
    id: string,
    orderData: any,
  },
};
export type PurchaseBurgerFailureActionType = {
  type: 'PURCHASE_BURGER_FAILURE',
  payload: {
    error: string,
  },
};
export type PurchaseBurgerStartActionType = {
  type: 'PURCHASE_BURGER_START',
};
export type PurchaseBurgerActionType = {
  type: 'PURCHASE_BURGER',
  payload: {
    orderData: any,
    token: string,
  },
};
export type PurchaseInitActionType = {
  type: 'PURCHASE_INIT',
};
export type FetchOrdersSuccessActionType = {
  type: 'FETCH_ORDERS_SUCCESS',
  payload: {
    orders: any[],
  },
};
export type FetchOrdersFailureActionType = {
  type: 'FETCH_ORDERS_FAILURE',
  payload: {
    error: string,
  },
};
export type FetchOrdersStartActionType = {
  type: 'FETCH_ORDERS_START',
};
export type FetchOrdersActionType = {
  type: 'FETCH_ORDERS',
  payload: {
    token: string,
    userId: string,
  },
};

export const purchaseBurger = (
  orderData: any,
  token: string,
): PurchaseBurgerActionType => ({
  type: PURCHASE_BURGER,
  payload: {
    orderData,
    token,
  },
});

export const fetchOrders = (
  token: string,
  userId: string,
): FetchOrdersActionType => ({
  type: FETCH_ORDERS,
  payload: {
    token,
    userId,
  },
});
