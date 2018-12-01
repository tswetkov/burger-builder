import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkcout extends Component {
  state = {
    ingredients: null,
    price: 0,
    loading: false
  };

  componentWillMount() {
    console.log(this.props.location);

    const query = new URLSearchParams(
      this.props.location.search
    );
    const ingredients = {};
    let totalPrice = 0;
    for (let param of query.entries()) {
      // ["salad", "1"]
      if (param[0] === "price") {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients, totalPrice });
  }

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
          ingredients={this.state.ingredients}
          checkoutCancel={this.handleCheckoutCancel}
          checkoutContinued={this.handleCheckoutContinued}
        />

        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkcout;
