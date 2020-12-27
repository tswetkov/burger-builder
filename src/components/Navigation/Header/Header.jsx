import React from 'react';
import styled from 'styled-components';

import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  height: var(--header-height);
  width: 100%;
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

const HeaderLogoWrapper = styled(Link)`
  height: 80%;
`;

export const Header = ({ drawerToggleClicked, isAuthenticated }) => {
  return (
    <HeaderWrapper>
      <DrawerToggle clicked={drawerToggleClicked} />
      <HeaderLogoWrapper to="/">
        <Logo />
      </HeaderLogoWrapper>
      <Navigation>
        <NavigationItems isAuthenticated={isAuthenticated} />
      </Navigation>
    </HeaderWrapper>
  );
};
