import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Logout } from 'src/components/Logout';
import { SignIn } from 'src/containers/SignIn';
import { Checkout } from 'src/containers/Checkout';
import { BurgerBuilder } from 'src/containers/BurgerBuilder';
import { Orders } from 'src/containers/Orders';

import { authCheckState } from 'src/store/actions';
import { GuardRoute } from 'src/utils';
import { Header } from 'src/components/Navigation/Header';
import { SideDrawer } from 'src/components/Navigation/SideDrawer';
import { ContactData } from 'src/containers/Checkout/ContactData';
import { RootState } from 'src/store';

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
  const { t } = useTranslation();
  const { isAuth, isLoading } = useSelector((state: RootState) => ({
    isAuth: state.auth.token !== null,
    isLoading: state.auth.loading,
  }));

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

  if (isLoading) {
    return <p>{t('loading')}...</p>;
  }

  return (
    <Wrapper>
      <Header isAuth={isAuth} onToggleDrawer={handleSideDrawerToggle} />
      <SideDrawer
        isAuth={isAuth}
        isOpen={isSideDrawerVisible}
        onClick={handleSideDrawerClose}
      />
      <Content>
        <Switch>
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
            // TODO: нужно проверить настройки webpack
            path="/contact-data"
            component={ContactData}
          />
          <GuardRoute isAuth={isAuth} path="/orders" component={Orders} />
          <GuardRoute isAuth={isAuth} exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </Content>
    </Wrapper>
  );
};

// TODO: разобраться с типом
export const App: any = hot(AppComponent);
