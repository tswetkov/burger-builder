import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  token: string | null;
  userId: string | null;
  error: string | null;
  loading: boolean;
  authRedirectPath: string;
};

const initialState: AuthState = {
  token: null,
  userId: null,
  error: null,
  loading: true,
  authRedirectPath: '/',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },

    authSuccess(state, action) {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        error: null,
        loading: false,
      };
    },

    authFailure(state, action) {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    },

    authLogout(state) {
      return {
        ...state,
        token: null,
        userId: null,
        loading: false,
      };
    },

    setAuthRedirectPath(state, action) {
      return {
        ...state,
        authRedirectPath: action.payload.path,
      };
    },
  },
});

export const {
  actions: {
    authSuccess,
    authStart,
    authFailure,
    authLogout,
    setAuthRedirectPath,
  },
  reducer: auth,
} = authSlice;
