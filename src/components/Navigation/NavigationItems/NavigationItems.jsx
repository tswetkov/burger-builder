import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Конструктор
      </NavigationItem>
      <NavigationItem link="/orders">Заказы</NavigationItem>
      <NavigationItem link="/auth">Авторизация</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
