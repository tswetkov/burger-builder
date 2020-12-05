import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';

import {
  purchaseBurgerSuccess,
  purchaseBurgerFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from '../actions/order';

export function* purchaseBurgerSaga(action) {
  try {
    const response = yield axios.post(
      '/orders.json?auth=' + action.token,
      action.orderData,
    );
    yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put(purchaseBurgerFailure(error));
  }
}

export function* fetchOrderSaga(action) {
  yield put(fetchOrdersStart());
  const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
  try {
    const response = yield axios.get('/orders.json' + queryParams);
    const fetchOrders = [];
    for (let key in response.data) {
      fetchOrders.push({ ...response.data[key], id: key });
    }
    yield put(fetchOrdersSuccess(fetchOrders));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}
