// @flow

import type { Saga } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { orderService } from 'services';

import { history } from 'utils';
import {
  purchaseBurgerSuccess,
  purchaseBurgerFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  purchaseBurgerStart,
  type PurchaseBurgerActionType,
  type FetchOrdersActionType,
} from '../actions/order';

export function* purchaseBurgerSaga(
  action: PurchaseBurgerActionType,
): Saga<void> {
  yield put(purchaseBurgerStart());

  try {
    const response = yield orderService.order(
      `/orders.json?auth=${action.payload.token}`,
      action.payload.orderData,
    );
    yield put(
      purchaseBurgerSuccess(response.data.name, action.payload.orderData),
    );
    history.push('/');
  } catch (error) {
    yield put(purchaseBurgerFailure(error));
  }
}

export function* fetchOrderSaga(action: FetchOrdersActionType): Saga<void> {
  yield put(fetchOrdersStart());
  const queryParams = `?auth=${action.payload.token}&orderBy="userId"&equalTo="${action.payload.userId}"`;
  try {
    const response = yield orderService.getOrders(`/orders.json${queryParams}`);
    const fetchOrders = [];
    Object.keys(response.data).forEach((key) => {
      fetchOrders.push({ ...response.data[key], id: key });
    });
    yield put(fetchOrdersSuccess(fetchOrders));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}
