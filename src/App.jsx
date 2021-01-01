// @flow

import { hot } from 'react-hot-loader/root';
import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Logout } from 'components/Logout';
import { SignIn } from 'containers/SignIn';
import { Checkout } from 'containers/Checkout';
import { BurgerBuilder } from 'containers/BurgerBuilder';
import { Orders } from 'containers/Orders';

import { authCheckState } from 'store/actions';
import { GuardRoute } from 'utils';
import { Header } from 'components/Navigation/Header';
import { SideDrawer } from 'components/Navigation/SideDrawer';
import { ContactData } from 'containers/Checkout/ContactData';

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
  const isAuth = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  const checkAuthStatus = useCallback(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

  const handleSideDrawerClose = useCallback(
    () => setIsSideDrawerVisible(false),
    [],
  );

  const handleSideDrawerToggle = useCallback(
    () => setIsSideDrawerVisible((prevState) => !prevState),
    [],
  );

  return (
    <Switch>
      <Wrapper>
        <Header isAuth={isAuth} onToggleDrawer={handleSideDrawerToggle} />
        <SideDrawer
          isAuth={isAuth}
          isOpen={isSideDrawerVisible}
          onClick={handleSideDrawerClose}
        />
        <Content>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/signin" component={SignIn} />

          <GuardRoute
            isAuth={isAuth}
            exact
            path="/checkout"
            component={Checkout}
          />
          <GuardRoute
            isAuth={isAuth}
            path="/checkout/contact-data"
            component={ContactData}
          />
          <GuardRoute isAuth={isAuth} path="/orders" component={Orders} />
          <GuardRoute isAuth={isAuth} exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Content>
      </Wrapper>
    </Switch>
  );
};

// TODO: разобраться с типом
export const App: any = hot(AppComponent);
