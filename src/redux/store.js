import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchOrders } from './sagas';

const componseEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  componseEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOrders);
