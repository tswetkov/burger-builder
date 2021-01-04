// @flow

import {
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_START,
  PURCHASE_BURGER,
  FETCH_ORDERS,
} from '../actionTypes';

type PurchaseBurgerSuccessActionType = {
  type: 'PURCHASE_BURGER_SUCCESS',
  payload: {
    id: string,
    orderData: any,
  },
};
type PurchaseBurgerFailureActionType = {
  type: 'PURCHASE_BURGER_FAILURE',
  payload: {
    error: string,
  },
};
type PurchaseBurgerStartActionType = {
  type: 'PURCHASE_BURGER_START',
};
type PurchaseBurgerActionType = {
  type: 'PURCHASE_BURGER',
  payload: {
    orderData: any,
    token: string,
  },
};
type PurchaseInitActionType = {
  type: 'PURCHASE_INIT',
};
type FetchOrdersSuccessActionType = {
  type: 'FETCH_ORDERS_SUCCESS',
  payload: {
    orders: any[],
  },
};
type FetchOrdersFailureActionType = {
  type: 'FETCH_ORDERS_FAILURE',
  payload: {
    error: string,
  },
};
type FetchOrdersStartActionType = {
  type: 'FETCH_ORDERS_START',
};
type FetchOrdersActionType = {
  type: 'FETCH_ORDERS',
  payload: {
    token: string,
    userId: string,
  },
};

export const purchaseBurgerSuccess = (
  id: string,
  orderData: any,
): PurchaseBurgerSuccessActionType => ({
  type: PURCHASE_BURGER_SUCCESS,
  payload: {
    id,
    orderData,
  },
});

export const purchaseBurgerFailure = (
  error: string,
): PurchaseBurgerFailureActionType => ({
  type: PURCHASE_BURGER_FAILURE,
  payload: {
    error,
  },
});

export const purchaseBurgerStart = (): PurchaseBurgerStartActionType => ({
  type: PURCHASE_BURGER_START,
});

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

export const purchaseInit = (): PurchaseInitActionType => ({
  type: PURCHASE_INIT,
});

export const fetchOrdersSuccess = (
  orders: any[],
): FetchOrdersSuccessActionType => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: {
    orders,
  },
});

export const fetchOrdersFailure = (
  error: string,
): FetchOrdersFailureActionType => ({
  type: FETCH_ORDERS_FAILURE,
  payload: {
    error,
  },
});

export const fetchOrdersStart = (): FetchOrdersStartActionType => ({
  type: FETCH_ORDERS_START,
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
