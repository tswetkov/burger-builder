import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";

import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ваше имя"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Улица"
        },
        value: ""
      },
      index: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Индекс"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Страна"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ваша почта"
        },
        value: ""
      },
      deleveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Быстрый" },
            { value: "cheapest", displayValue: "Медленный" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  handleOrder = event => {
    console.log(this.props);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
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
        <Input elementType="..." elementConfig="..." value="..." />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Улица"
        />
        <Input
          inputType="input"
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
