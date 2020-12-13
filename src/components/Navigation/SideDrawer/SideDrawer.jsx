import React, { Fragment } from 'react';

import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { Backdrop } from '../../UI';

import classes from './SideDrawer.module.css';

export const SideDrawer = ({ closed, open }) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};
