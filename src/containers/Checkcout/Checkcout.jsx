import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

export default class Checkcout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

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
          checkoutCancel={this.handleCheckoutCancel}
          checkoutContinued={this.handleCheckoutContinued}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}
