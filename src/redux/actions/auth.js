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

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: AUTH_SUCCESS,
    idToken,
    userId,
  };
};

export const authFailure = (error) => {
  return {
    type: AUTH_FAILURE,
    error,
  };
};

export const logout = () => {
  return {
    type: AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return { type: AUTH_LOGOUT };
};

export const checkAuthTimeout = (expirationTime) => {
  return { type: AUTH_CHECK_TIMEOUT, expirationTime };
};

export const auth = (email, password, isSignup = false) => {
  return {
    type: AUTH_USER,
    email,
    password,
    isSignup,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path,
  };
};

export const authCheckState = () => {
  return {
    type: AUTH_CHECK_STATE,
  };
};
