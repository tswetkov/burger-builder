// @flow

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import type { Store } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { reducers, type State } from './reducers';
import { watchAuth, watchOrders } from './sagas';
import type { Actions } from './actions';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store: Store<State, Actions> = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
});

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOrders);
