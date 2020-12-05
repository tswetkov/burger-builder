import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import classes from "./Layout.module.css";
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
        <Toolbar
          isAuthenticated={this.props.isAuthenticated}
          drawerToggleClicked={this.handleSideDrawerToggle}
        />
        <SideDrawer
          isAuthenticated={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.handleSideDrawerClose}
        />
        <main className={classes.Content}>{children}</main>
      </Fragment>
    );
  }
}

const mapState = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapState)(Layout);
