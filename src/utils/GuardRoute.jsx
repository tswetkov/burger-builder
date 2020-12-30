// @flow

import React, { type Node } from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  isAuth: boolean,
  path: string,
  component: Node,
  exact?: boolean,
};

export const GuardRoute = ({ isAuth, path, component, exact }: Props): Node =>
  isAuth ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/" />
  );
