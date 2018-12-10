import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_START,
  PURCHASE_INIT
} from "../actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      }; //returns new array
    case PURCHASE_BURGER_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
