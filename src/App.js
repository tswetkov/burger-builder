import React, { useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './hoc/Layout';
import { Logout } from './components/Logout';
import { SignIn } from './containers/SignIn';
import { Checkout } from './containers/Checkout';
import { BurgerBuilder } from './containers/BurgerBuilder';
import { Orders } from './containers/Orders';

import { authCheckState } from './redux/actions';

export const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  const onTryAutoSignup = useCallback(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <>
      <Route path="/signin" component={SignIn} />
      <Route exact path="/" component={BurgerBuilder} />
      <Redirect to="/" />
    </>
  );

  if (isAuthenticated) {
    routes = (
      <>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </>
    );
  }
  return (
    <Switch>
      <Layout isAuthenticated={isAuthenticated}>{routes}</Layout>
    </Switch>
  );
};
