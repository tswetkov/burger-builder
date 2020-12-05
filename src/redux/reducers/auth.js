import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from '../actionTypes';
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  };
};

const authFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
  };
};

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.path,
  };
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);

    case AUTH_SUCCESS:
      return authSuccess(state, action);

    case AUTH_FAILURE:
      return authFailure(state, action);

    case AUTH_LOGOUT:
      return authLogout(state, action);
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default auth;
