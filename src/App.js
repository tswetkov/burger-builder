// @flow

import { hot } from 'react-hot-loader/root';
import React, { useEffect, useCallback, useState, type Node } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Logout } from './components/Logout';
import { SignIn } from './containers/SignIn';
import { Checkout } from './containers/Checkout';
import { BurgerBuilder } from './containers/BurgerBuilder';
import { Orders } from './containers/Orders';

import { authCheckState } from './redux/actions';
import { GuardRoute } from './utils';
import { Header } from './components/Navigation/Header';
import { SideDrawer } from './components/Navigation/SideDrawer';
import styled from 'styled-components';
import { ContactData } from './containers/Checkout/ContactData';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: calc(100% - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AppComponent = () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  const onTryAutoSignup = useCallback(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = useCallback(() => setShowSideDrawer(false), []);

  const handleSideDrawerToggle = useCallback(
    () => setShowSideDrawer((prevState) => !prevState),
    [],
  );

  return (
    <Switch>
      <Wrapper>
        <Header
          isAuthenticated={isAuthenticated}
          drawerToggleClicked={handleSideDrawerToggle}
        />
        <SideDrawer
          isAuthenticated={isAuthenticated}
          open={showSideDrawer}
          isAuthenticated={isAuthenticated}
          closed={handleSideDrawerClose}
        />
        <Content>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/signin" component={SignIn} />

          <GuardRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/checkout"
            // $FlowFixMe TODO: разобраться с типом
            component={Checkout}
          />
          <GuardRoute
            isAuthenticated={isAuthenticated}
            path="/checkout/contact-data"
            component={ContactData}
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
        </Content>
      </Wrapper>
    </Switch>
  );
};

export const App: Node = hot(AppComponent);
