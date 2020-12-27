import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Header } from '../../components/Navigation/Header';
import { SideDrawer } from '../../components/Navigation/SideDrawer';

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

export const Layout = ({ children, isAuthenticated }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = useCallback(() => setShowSideDrawer(false), []);

  const handleSideDrawerToggle = useCallback(
    () => setShowSideDrawer((prevState) => !prevState),
    [],
  );

  return (
    <Wrapper>
      <Header
        isAuthenticated={isAuthenticated}
        drawerToggleClicked={handleSideDrawerToggle}
      />
      <SideDrawer
        isAuthenticated={isAuthenticated}
        open={showSideDrawer}
        closed={handleSideDrawerClose}
      />
      <Content>{children}</Content>
    </Wrapper>
  );
};
