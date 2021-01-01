// @flow

import type { Node } from 'react';

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  isAuth: boolean,
  path: string,
  component: (props?: any) => Node,
  exact?: boolean,
};

export const GuardRoute = ({ isAuth, path, component, exact }: Props): Node =>
  isAuth ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/" />
  );
