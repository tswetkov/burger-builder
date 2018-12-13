import {
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_START
} from "../actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    id,
    orderData
  };
};

export const purchaseBurgerFailure = error => {
  return {
    type: PURCHASE_BURGER_FAILURE,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFailure(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFailure = error => {
  return {
    type: FETCH_ORDERS_FAILURE,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json")
      .then(response => {
        const fetchOrders = [];
        for (let key in response.data) {
          fetchOrders.push({ ...response.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchOrders));
      })
      .catch(error => {
        dispatch(fetchOrdersFailure(error));
      });
  };
};
