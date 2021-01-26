import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import { watchAuth, watchOrders } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
});

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOrders);

export type RootState = ReturnType<typeof reducers>;
