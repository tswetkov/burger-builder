import React from 'react';
import styled from 'styled-components';

import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle';

const ToolbarWrapper = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;
const Navigation = styled.nav`
  height: 100%;

  @media (max-width: 499px) {
    display: none;
  }
`;

const ToolbarLogoWrapper = styled.div`
  height: 80%;
`;

export const Toolbar = ({ drawerToggleClicked, isAuthenticated }) => {
  return (
    <ToolbarWrapper>
      <DrawerToggle clicked={drawerToggleClicked} />
      <ToolbarLogoWrapper>
        <Logo />
      </ToolbarLogoWrapper>
      <Navigation>
        <NavigationItems isAuthenticated={isAuthenticated} />
      </Navigation>
    </ToolbarWrapper>
  );
};
