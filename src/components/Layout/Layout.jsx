import React, { Component, Fragment } from "react";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  handleSideDrawerClose = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.handleSideDrawerClose}
        />
        <main className={classes.Content}>{children}</main>
      </Fragment>
    );
  }
}

export default Layout;
