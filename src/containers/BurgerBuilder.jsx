import React, { Component, Fragment } from "react";
import Burger from "../components/Burger/Burger";

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      sadad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
