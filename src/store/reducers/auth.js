// @flow

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from '../actionTypes';

import type { Actions } from '../actions';

type State = {
  token: string | null,
  userId: string | null,
  error: string | null,
  loading: boolean,
  authRedirectPath: string,
};

const initialState: State = {
  token: null,
  userId: null,
  error: null,
  loading: true,
  authRedirectPath: '/',
};

const authStart = (state) => ({
  ...state,
  error: null,
  loading: true,
});

const authSuccess = (state, action) => ({
  ...state,
  token: action.idToken,
  userId: action.userId,
  error: null,
  loading: false,
});

const authFailure = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

const authLogout = (state) => ({
  ...state,
  token: null,
  userId: null,
  loading: false,
});

const setAuthRedirectPath = (state, action) => ({
  ...state,
  authRedirectPath: action.path,
});

export const auth = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state);

    case AUTH_SUCCESS:
      return authSuccess(state, action.payload);

    case AUTH_FAILURE:
      return authFailure(state, action.payload);

    case AUTH_LOGOUT:
      return authLogout(state);
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action.payload);
    default:
      return state;
  }
};

export default auth;
