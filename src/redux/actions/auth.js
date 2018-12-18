import axios from "axios";

import { AUTH_FAILURE, AUTH_START, AUTH_SUCCESS } from "../actionTypes";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: AUTH_SUCCESS,
    data
  };
};

export const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    error
  };
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
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFailure(error));
      });
  };
};
