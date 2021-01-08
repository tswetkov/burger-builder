// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import type { Store } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { reducers, type State } from './reducers';
import { watchAuth, watchOrders } from './sagas';
import type { Actions } from './actions';

const componseEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();

export const store: Store<State, Actions> = createStore(
  reducers,
  componseEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOrders);
