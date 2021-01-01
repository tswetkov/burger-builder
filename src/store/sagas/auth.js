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
} from '../actions/auth';

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token'); // стало
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  // yield localStorage.removeItem("token"); // было
  // yield localStorage.removeItem("expirationDate");
  // yield localStorage.removeItem("userId");
  yield put(logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(logout());
}

export function* authUserSaga(action) {
  yield put(authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };

  try {
    const response = yield authService.login(authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(authSuccess(response.data.idToken, response.data.localId));
    yield put(checkAuthTimeout(response.data.expiresIn));
    history.push('/');
  } catch (error) {
    yield put(authFailure(error.response.data.error));
  }
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');

  if (!token) {
    yield put(logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem('expirationDate'),
    );

    if (expirationDate <= new Date()) {
      yield put(logout());
    } else {
      const userId = yield localStorage.getItem('userId');

      yield put(authSuccess(token, userId));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
  }
}
