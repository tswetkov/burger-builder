import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_START
} from "../actionTypes";

const initialState = {
  orders: [],
  loading: false
};

export const order = (state = initialState, action) => {
  switch (action.types) {
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder) //returns new array
      };
    case PURCHASE_BURGER_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
