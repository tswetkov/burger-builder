import React from "react";
import classes from "./Order.css";

const Order = () => {
  return (
    <div className={classes.Order}>
      <p>Ингридиенты: Салат (1)</p>
      <p>
        Цена: <strong>150 Р</strong>
      </p>
    </div>
  );
};

export default Order;
