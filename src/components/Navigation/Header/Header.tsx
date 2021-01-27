import * as React from 'react';
import { memo } from 'react';
import styled from 'astroturf';
import { Link } from 'react-router-dom';

import { Logo } from 'src/components/Logo';
import { NavigationItems } from '../NavigationItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle';

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

type Props = {
  onToggleDrawer: () => void;
  isAuth: boolean;
};

export const Header = memo<Props>(({ onToggleDrawer, isAuth }) => (
  <HeaderWrapper>
    <DrawerToggle onClick={onToggleDrawer} />
    <HeaderLogoWrapper to="/">
      <Logo />
    </HeaderLogoWrapper>
    <Navigation>
      <NavigationItems isAuth={isAuth} />
    </Navigation>
  </HeaderWrapper>
));
