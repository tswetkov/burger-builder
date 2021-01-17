// @flow

import {
  AUTH_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
  AUTH_INITIATE_LOGOUT,
  AUTH_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
} from '../actionTypes';

type AuthStartActionType = {
  type: typeof AUTH_START,
};

export type AuthStartSuccessActionType = {
  type: typeof AUTH_SUCCESS,
  payload: {
    idToken: string,
    userId: string,
  },
};

export type AuthStartFailureActionType = {
  type: typeof AUTH_FAILURE,
  payload: {
    error: string,
  },
};

export type LogoutActionType = {
  type: typeof AUTH_INITIATE_LOGOUT,
};

export type LogoutSuccessActionType = {
  type: typeof AUTH_LOGOUT,
};

export type CheckAuthTimeoutActionType = {
  type: typeof AUTH_CHECK_TIMEOUT,
  payload: {
    expirationTime: number,
  },
};

export type AuthUserActionType = {
  type: typeof AUTH_USER,
  payload: {
    email: string,
    password: string,
    isSignup: boolean,
  },
};

export type SstRedirectPathActionType = {
  type: typeof SET_AUTH_REDIRECT_PATH,
  payload: {
    path: string,
  },
};

export type AuthCheckStateActionType = {
  type: typeof AUTH_CHECK_STATE,
};

export const authStart = (): AuthStartActionType => ({
  type: AUTH_START,
});

export const logout = (): LogoutActionType => ({
  type: AUTH_INITIATE_LOGOUT,
});

export const checkAuthTimeout = (
  expirationTime: number,
): CheckAuthTimeoutActionType => ({
  type: AUTH_CHECK_TIMEOUT,
  payload: {
    expirationTime,
  },
});

export const auth = (
  email: string,
  password: string,
  isSignup: boolean = false,
): AuthUserActionType => ({
  type: AUTH_USER,
  payload: {
    email,
    password,
    isSignup,
  },
});

export const authCheckState = (): AuthCheckStateActionType => ({
  type: AUTH_CHECK_STATE,
});
