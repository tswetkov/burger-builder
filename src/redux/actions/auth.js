import {
  AUTH_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
  AUTH_INITIATE_LOGOUT,
  AUTH_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  AUTH_USER
} from "../actionTypes";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: AUTH_SUCCESS,
    idToken,
    userId
  };
};

export const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    error
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("userId");
  return {
    type: AUTH_INITIATE_LOGOUT
  };
};

export const logoutSucceed = () => {
  return { type: AUTH_LOGOUT };
};

export const checkAuthTimeout = expirationTime => {
  return { type: AUTH_CHECK_TIMEOUT, expirationTime };
};

export const auth = (email, password, isSignup) => {
  return {
    type: AUTH_USER,
    email,
    password,
    isSignup
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
