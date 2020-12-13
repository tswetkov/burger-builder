import React from 'react';
import classes from './Toolbar.module.css';
import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle';

export const Toolbar = ({ drawerToggleClicked, isAuthenticated }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DecktopOnly}>
        <NavigationItems isAuthenticated={isAuthenticated} />
      </nav>
    </header>
  );
};
