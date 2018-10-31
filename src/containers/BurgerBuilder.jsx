import React, { Component } from "react";
import Aux from "../hoc/_Aux";
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
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
