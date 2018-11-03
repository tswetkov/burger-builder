import React, { Fragment } from "react";

const OrderSummary = ({ ingredients }) => {
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
      <p>Нажмёте для продолжения?</p>
    </Fragment>
  );
};

export default OrderSummary;
