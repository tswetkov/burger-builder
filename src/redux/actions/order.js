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

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    id,
    orderData,
  };
};

export const purchaseBurgerFailure = (error) => {
  return {
    type: PURCHASE_BURGER_FAILURE,
    error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: PURCHASE_BURGER,
    orderData,
    token,
  };
};

export const purchaseInit = () => {
  return {
    type: PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFailure = (error) => {
  return {
    type: FETCH_ORDERS_FAILURE,
    error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: FETCH_ORDERS,
    token,
    userId,
  };
};
