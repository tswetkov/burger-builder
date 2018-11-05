import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>МЕНЮ</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DecktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
