import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkcout from "./containers/Checkcout/Checkcout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

import { authCheckState } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkcout} />
          <Route path="/orders" component={Orders} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          <Switch>{routes}</Switch>
        </Layout>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatch = dispath => {
  return {
    onTryAutoSignup: () => dispath(authCheckState())
  };
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
);
