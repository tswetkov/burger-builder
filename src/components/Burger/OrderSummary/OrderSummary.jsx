// import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import React, { Component, Fragment } from "react";

class OrderSummary extends Component {
  //Здесь мог бы быть функциональный компонент
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey, index) => {
        return (
          <li key={igKey + index}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    const { modalClosed, modalContinue, price } = this.props;
    return (
      <Fragment>
        <h3>Ваш заказ</h3>
        <p>Цифровой бургер из:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Конечная цена: {price.toFixed(2)}</strong>
        </p>
        <p>Что дальше?</p>
        <Button clicked={modalClosed} btnType="Danger">
          ЗАКРЫТЬ
        </Button>
        <Button clicked={modalContinue} btnType="Success">
          ПРОДОЛЖИТЬ
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
