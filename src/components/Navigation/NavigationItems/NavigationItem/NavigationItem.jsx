import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

export const NavigationItem = ({ children, link, exact }) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={link} exact={exact} activeClassName={classes.active}>
        {children}
      </NavLink>
    </li>
  );
};
