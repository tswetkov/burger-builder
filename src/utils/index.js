// @flow

// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

export { GuardRoute } from './GuardRoute';

// $FlowFixMe
export const history = createBrowserHistory();

export type Action<Type, Payload = void> = {
  type: Type,
  payload: ?Payload,
};
