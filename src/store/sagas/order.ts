import { put } from 'redux-saga/effects';
import { orderService } from 'services';

import { history } from 'utils';
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

export function* purchaseBurgerSaga(action: PurchaseBurgerActionType) {
  yield put(purchaseBurgerStart());

  try {
    const response: any = yield orderService.order(
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
    yield put(purchaseBurgerFailure(error));
  }
}

export function* fetchOrderSaga(action: FetchOrdersActionType) {
  yield put(fetchOrdersStart());
  const queryParams = `?auth=${action.payload.token}&orderBy="userId"&equalTo="${action.payload.userId}"`;
  try {
    const response = yield orderService.getOrders(`/orders.json${queryParams}`);
    const fetchOrders = [];
    Object.keys(response.data).forEach((key) => {
      fetchOrders.push({ ...response.data[key], id: key });
    });
    yield put(fetchOrdersSuccess({ orders: fetchOrders }));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}
