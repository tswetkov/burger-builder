import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ ingredients, modalClosed, modalContinue, price }) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey, index) => {
    return (
      <li key={igKey + index}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey]}
      </li>
    );
  });
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
};

export default OrderSummary;
