import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { purchaseInit } from "../../redux/actions";

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
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <Fragment>
          {purchasedRedirect}
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
    ingredients: state.ingredients.ingredients,
    purchased: state.order.purchased
  };
};

const mapDispatch = dispatch => {
  return {
    onInitPurchase: () => dispatch(purchaseInit())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Checkcout);
