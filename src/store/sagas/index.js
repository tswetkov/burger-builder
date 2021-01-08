// @flow

import type { Saga } from 'redux-saga';
import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  AUTH_INITIATE_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
  PURCHASE_BURGER,
  FETCH_ORDERS,
} from '../actionTypes';

import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from './auth';
import { purchaseBurgerSaga, fetchOrderSaga } from './order';

export function* watchAuth(): Saga<void> {
  yield all([
    takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(AUTH_USER, authUserSaga),
    takeEvery(AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchOrders(): Saga<void> {
  yield takeLatest(PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(FETCH_ORDERS, fetchOrderSaga);
}
