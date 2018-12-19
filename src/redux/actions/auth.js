import axios from "axios";

import {
  AUTH_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT
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
  return {
    type: AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch =>
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime) * 1000;
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
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFailure(error.response.data.error));
      });
  };
};
