import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

import withErrorHandler from "../../../hoc/Layout/WithErrorHandler/WithErrorHandler";

import classes from "./ContactData.css";
import { purchaseBurgerStart } from "../../../redux/actions";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ваше имя"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Улица"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      index: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Индекс"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        minLength: 5,
        maxLength: 5
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Страна"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ваша почта"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        include: true
      },
      deleveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Быстрый" },
            { value: "cheapest", displayValue: "Медленный" }
          ]
        },
        value: "fastest",
        valid: true,
        validation: {
          required: true
        }
      }
    },
    formIsValid: false,
    loading: false
  };

  handleOrder = event => {
    console.log(this.props);
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    this.props.onOrderBurger(order);
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.include) {
      if (value.includes("@")) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    return isValid;
  }

  hangleChangeInput = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.handleOrder}>
        {formElementsArray.map(formElement => {
          return (
            <Input
              key={formElement.id}
              value={formElement.config.value}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              changed={event => this.hangleChangeInput(event, formElement.id)}
              invalid={!formElement.config.valid}
              touched={formElement.config.touched}
              shouldValidate={formElement.config.validation}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
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

const mapState = state => {
  return {
    ingredients: state.ingredients.ingredients,
    price: state.ingredients.totalPrice
  };
};

const mapDispatch = dispatch => {
  return {
    onOrderBurger: orderData => dispatch(purchaseBurgerStart(orderData))
  };
};
export default connect(
  mapState,
  mapDispatch
)(withRouter(withErrorHandler(ContactData, axios)));
