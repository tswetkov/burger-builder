import React, { Component } from "react";
import { Route } from "react-router-dom";
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
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancel={this.handleCheckoutCancel}
          checkoutContinued={this.handleCheckoutContinued}
        />

        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}
const mapState = state => {
  return {
    ingredients: state.ingredients.ingredients
  };
};

export default connect(mapState)(Checkcout);
