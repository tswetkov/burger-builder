import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Toolbar } from '../../components/Navigation/Toolbar';
import { SideDrawer } from '../../components/Navigation/SideDrawer';

const Content = styled.div`
  margin-top: 72px;
`;

export const Layout = ({ children, isAuthenticated }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = useCallback(() => setShowSideDrawer(false), []);

  const handleSideDrawerToggle = useCallback(
    () => setShowSideDrawer((prevState) => !prevState),
    [],
  );

  return (
    <>
      <Toolbar
        isAuthenticated={isAuthenticated}
        drawerToggleClicked={handleSideDrawerToggle}
      />
      <SideDrawer
        isAuthenticated={isAuthenticated}
        open={showSideDrawer}
        closed={handleSideDrawerClose}
      />
      <Content>{children}</Content>
    </>
  );
};
