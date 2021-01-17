// @flow

import type { Saga } from 'redux-saga';

import { delay, put, call } from 'redux-saga/effects';

import { history } from 'utils';
import { authService } from 'services';
import {
  authStart,
  authSuccess,
  authFailure,
  authLogout,
} from '../slices/authSlice';

import {
  logout,
  checkAuthTimeout,
  type CheckAuthTimeoutActionType,
  type AuthUserActionType,
} from '../actions/auth';

export function* logoutSaga(): Saga<void> {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(authLogout());
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
    const { idToken: token, localId: userId, expiresIn } = response.data;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toString());
    localStorage.setItem('userId', userId);
    yield put(authSuccess({ token, userId }));
    yield put(checkAuthTimeout(expiresIn));
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

      yield put(authSuccess({ token, userId }));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
  }
}
