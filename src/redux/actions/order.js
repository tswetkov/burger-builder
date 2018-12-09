import { PURCHASE_BURGER_FAILURE, PURCHASE_BURGER_SUCCESS } from "../actionTypes";
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

export const purchaseBurgerStart = orderData => {
  return dispatch => {
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFailure(error));
      });
  };
};
