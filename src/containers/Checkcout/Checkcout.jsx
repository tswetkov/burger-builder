import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkcout extends Component {
  handleCheckoutCancel = () => {
    this.props.history.goBack();
  };
  handleCheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ingredients) {
      summary = (
        <Fragment>
          <CheckoutSummary
            ingredients={this.props.ingredients}
            checkoutCancel={this.handleCheckoutCancel}
            checkoutContinued={this.handleCheckoutContinued}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </Fragment>
      );
    }
    return summary;
  }
}
const mapState = state => {
  return {
    ingredients: state.ingredients.ingredients
  };
};

export default connect(mapState)(Checkcout);
