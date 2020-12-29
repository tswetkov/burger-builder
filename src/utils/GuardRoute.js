// @flow

import React, { type Node } from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  isAuthenticated: boolean,
  path: string,
  component: Node,
  exact?: boolean,
};

export const GuardRoute = ({ isAuthenticated, ...rest }: Props): Node => {
  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/" />;
};
