// @flow

import type { Saga } from 'redux-saga';

import { delay, put, call } from 'redux-saga/effects';

import { history } from 'utils';
import { authService } from 'services';
import {
  logoutSucceed,
  logout,
  authStart,
  authSuccess,
  checkAuthTimeout,
  authFailure,
  type CheckAuthTimeoutActionType,
  type AuthUserActionType,
} from '../actions/auth';

export function* logoutSaga(): Saga<void> {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(logoutSucceed());
}

export function* checkAuthTimeoutSaga(
  action: CheckAuthTimeoutActionType,
): Saga<void> {
  yield delay(action.payload.expirationTime * 1000);
  yield put(logout());
}

export function* authUserSaga(action: AuthUserActionType): Saga<void> {
  yield put(authStart());
  const authData = {
    email: action.payload.email,
    password: action.payload.password,
    returnSecureToken: true,
  };

  try {
    const response = yield authService.login(authData);
    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );

    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('expirationDate', expirationDate.toString());
    localStorage.setItem('userId', response.data.localId);

    yield put(authSuccess(response.data.idToken, response.data.localId));
    yield put(checkAuthTimeout(response.data.expiresIn));
    history.push('/');
  } catch (error) {
    yield put(authFailure(error.response.data.error));
  }
}

export function* authCheckStateSaga(): Saga<void> {
  yield put(authStart());
  const token = localStorage.getItem('token');

  if (!token) {
    yield put(logout());
  } else {
    const date = localStorage.getItem('expirationDate');
    if (!date) throw new Error('No Expiration Date founded');

    const expirationDate = new Date(date);

    if (expirationDate <= new Date()) {
      yield put(logout());
    } else {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error('No User Id founded');

      yield put(authSuccess(token, userId));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
  }
}
