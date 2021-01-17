// @flow

import type {
  AuthStartSuccessActionType,
  AuthStartFailureActionType,
  LogoutActionType,
  LogoutSuccessActionType,
  CheckAuthTimeoutActionType,
  AuthUserActionType,
  SstRedirectPathActionType,
  AuthCheckStateActionType,
} from './auth';

import type {
  PurchaseBurgerSuccessActionType,
  PurchaseBurgerFailureActionType,
  PurchaseBurgerStartActionType,
  PurchaseBurgerActionType,
  PurchaseInitActionType,
  FetchOrdersSuccessActionType,
  FetchOrdersFailureActionType,
  FetchOrdersStartActionType,
  FetchOrdersActionType,
} from './order';

import type {
  AddIngredientsActionType,
  RemoveIngredientsActionType,
  ResetIngredientsActionType,
  FetchIngredientsFaildActionType,
} from './burgerBuilder';

export type Actions =
  | AuthStartSuccessActionType
  | AuthStartFailureActionType
  | LogoutActionType
  | LogoutSuccessActionType
  | CheckAuthTimeoutActionType
  | AuthUserActionType
  | SstRedirectPathActionType
  | AuthCheckStateActionType
  | PurchaseBurgerSuccessActionType
  | PurchaseBurgerFailureActionType
  | PurchaseBurgerStartActionType
  | PurchaseBurgerActionType
  | PurchaseInitActionType
  | FetchOrdersSuccessActionType
  | FetchOrdersFailureActionType
  | FetchOrdersStartActionType
  | FetchOrdersActionType
  | AddIngredientsActionType
  | RemoveIngredientsActionType
  | ResetIngredientsActionType
  | FetchIngredientsFaildActionType;

export { purchaseBurger, fetchOrders } from './order';
export { auth, logout, authCheckState } from './auth';
