import React from "react";

import classes from "./Layout.css";

import Aux from "../../hoc/_Aux";

const Layout = ({ children }) => (
  <Aux>
    <div>Toolbar, SideDrawer, Bagdrop</div>
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default Layout;
