import React from 'react';
import styled from 'styled-components';

const OrderWrapper = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

export const Order = ({ ingredients, price }) => {
  const ingredientsArray = [];

  for (let ingredientName in ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredientsArray.map((ing) => {
    return (
      <span
        key={ing.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid lightgray',
          padding: '5px',
        }}
      >
        {ing.name} ({ing.amount})
      </span>
    );
  });

  return (
    <OrderWrapper>
      <p>Ингридиенты: {ingredientOutput}</p>
      <p>
        Цена: <strong>{Number.parseFloat(price).toFixed(2)} Р</strong>
      </p>
    </OrderWrapper>
  );
};
