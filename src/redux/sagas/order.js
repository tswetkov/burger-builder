import { put } from 'redux-saga/effects';
import { orderService } from '../../services';

import {
  purchaseBurgerSuccess,
  purchaseBurgerFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  purchaseBurgerStart,
} from '../actions/order';
import { history } from '../../utils';

export function* purchaseBurgerSaga(action) {
  yield put(purchaseBurgerStart());

  try {
    const response = yield orderService.order(
      '/orders.json?auth=' + action.token,
      action.orderData,
    );
    yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
    history.push('/');
  } catch (error) {
    yield put(purchaseBurgerFailure(error));
  }
}

export function* fetchOrderSaga(action) {
  yield put(fetchOrdersStart());
  const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
  try {
    const response = yield orderService.getOrders('/orders.json' + queryParams);
    const fetchOrders = [];
    for (let key in response.data) {
      fetchOrders.push({ ...response.data[key], id: key });
    }
    yield put(fetchOrdersSuccess(fetchOrders));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}
