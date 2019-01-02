import axios from "axios";

import {
  AUTH_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
  AUTH_INITIATE_LOGOUT
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

export const checkAuthTimeout = expirationTime => {
  return dispatch =>
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url = "signupNewUser";
    if (!isSignup) {
      url = "verifyPassword";
    }
    axios
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${url}?key=AIzaSyBaCpuaz4uIV_H3kNsxQYBJAzIfjXCiej4`,
        authData
      )
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFailure(error.response.data.error));
      });
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
