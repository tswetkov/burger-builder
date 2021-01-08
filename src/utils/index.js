// @flow

// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import type { RouterHistory } from 'react-router-dom';

export { GuardRoute } from './GuardRoute';

export const history: RouterHistory = createBrowserHistory();

export type Action<Type, Payload = void> = {
  type: Type,
  payload: ?Payload,
};
