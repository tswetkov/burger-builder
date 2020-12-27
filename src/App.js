import { hot } from 'react-hot-loader/root';
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
import { GuardRoute } from './utils';

const AppComponent = () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  const onTryAutoSignup = useCallback(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
    <Switch>
      <Layout isAuthenticated={isAuthenticated}>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/signin" component={SignIn} />

        <GuardRoute
          isAuthenticated={isAuthenticated}
          path="/checkout"
          component={Checkout}
        />
        <GuardRoute
          isAuthenticated={isAuthenticated}
          path="/orders"
          component={Orders}
        />
        <GuardRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/logout"
          component={Logout}
        />
        <Redirect to="/" />
      </Layout>
    </Switch>
  );
};

export const App = hot(AppComponent);
