import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";

import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  handleOrder = event => {
    console.log(this.props);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: "Roman Tsvetkov",
        address: {
          street: "Tested 133",
          index: "680042",
          country: "Russia"
        },
        email: "test@test.com"
      },
      deleveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Ваше имя"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Улица"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Индекс"
        />
        <Button btnType="Success" clicked={this.handleOrder}>
          ЗАКАЗАТЬ
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Введите Ваши данные:</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
