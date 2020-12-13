import React from 'react';

import classes from './NavigationItems.module.css';
import { NavigationItem } from './NavigationItem';

export const NavigationItems = ({ isAuthenticated }) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Конструктор
      </NavigationItem>
      {isAuthenticated ? (
        <NavigationItem link="/orders">Заказы</NavigationItem>
      ) : null}
      {!isAuthenticated ? (
        <NavigationItem link="/signin">Войти</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Выйти</NavigationItem>
      )}
    </ul>
  );
};
