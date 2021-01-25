import * as React from 'react';

import { Route, Redirect } from 'react-router-dom';

type Props = {
  isAuth: boolean;
  path: string;
  component: (props?: any) => any;
  exact?: boolean;
};

export const GuardRoute = ({ isAuth, path, component, exact }: Props) =>
  isAuth ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/" />
  );
