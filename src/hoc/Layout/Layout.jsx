import React, { useState, useCallback } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
      <main className={classes.Content}>{children}</main>
    </>
  );
};
