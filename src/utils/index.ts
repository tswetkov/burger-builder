// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

export { GuardRoute } from './GuardRoute';

export const history: any = createBrowserHistory();

export type Action<Type, Payload = void> = {
  type: Type;
  payload?: Payload;
};
