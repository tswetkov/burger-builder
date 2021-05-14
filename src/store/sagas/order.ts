import { put } from 'redux-saga/effects';
import { Ingredient } from 'src/components/Burger/BurgerIngredient';
import { orderService } from 'src/services';

import { history } from 'src/utils';
import {
  PurchaseBurgerActionType,
  FetchOrdersActionType,
} from '../actions/order';

import {
  purchaseBurgerSuccess,
  purchaseBurgerFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  purchaseBurgerStart,
} from '../slices/orderSlice';

export type Order = {
  id: string;
  ingreditens: Ingredient[];
  orderData: {
    country: string;
    deliveryMethod: string;
    email: string;
    index: string;
    name: string;
    street: string;
  };
  price: number;
  userId: string;
};

export function* purchaseBurgerSaga(action: PurchaseBurgerActionType): any {
  yield put(purchaseBurgerStart());

  try {
    const response = yield orderService.order(
      `/orders.json?auth=${action.payload.token}`,
      action.payload.orderData,
    );
    yield put(
      purchaseBurgerSuccess({
        id: response.data.name,
        orderData: action.payload.orderData,
      }),
    );
    history.push('/');
  } catch (error) {
    yield put(purchaseBurgerFailure());
  }
}

export function* fetchOrderSaga(action: FetchOrdersActionType): any {
  yield put(fetchOrdersStart());
  const queryParams = `?auth=${action.payload.token}&orderBy="userId"&equalTo="${action.payload.userId}"`;
  try {
    const response = yield orderService.getOrders(`/orders.json${queryParams}`);
    const fetchOrders: Order[] = [];
    Object.keys(response.data).forEach((key) => {
      fetchOrders.push({ ...response.data[key], id: key });
    });
    yield put(fetchOrdersSuccess({ orders: fetchOrders }));
  } catch (error) {
    yield put(fetchOrdersFailure());
  }
}
