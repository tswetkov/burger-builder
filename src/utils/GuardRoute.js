import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuardRoute = ({ isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/" />;
};
