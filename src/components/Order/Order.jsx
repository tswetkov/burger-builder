import React from "react";
import classes from "./Order.module.css";

const Order = ({ ingredients, price }) => {
  const ingredientsArray = [];

  for (let ingredientName in ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredientsArray.map(ing => {
    return (
      <span
        key={ing.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid lightgray",
          padding: "5px"
        }}
      >
        {ing.name} ({ing.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ингридиенты: {ingredientOutput}</p>
      <p>
        Цена: <strong>{Number.parseFloat(price).toFixed(2)} Р</strong>
      </p>
    </div>
  );
};

export default Order;
