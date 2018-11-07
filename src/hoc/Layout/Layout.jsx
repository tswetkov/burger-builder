import React, { Component, Fragment } from "react";

import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  handleSideDrawerClose = () => {
    this.setState({ showSideDrawer: false });
  };

  handleSideDrawerToggle = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.handleSideDrawerToggle} />
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
