import { Button } from '../../UI';

import React, { useMemo } from 'react';

export const OrderSummary = ({
  modalClosed,
  modalContinue,
  price,
  ingredients,
}) => {
  const ingredientSummary = useMemo(
    () =>
      Object.keys(ingredients).map((igKey, index) => {
        return (
          <li key={igKey + index}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {ingredients[igKey]}
          </li>
        );
      }),
    [ingredients],
  );

  return (
    <>
      <h3>Ваш заказ</h3>
      <p>Цифровой бургер из:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Конечная цена: {price.toFixed(2)}</strong>
      </p>
      <p>Что дальше?</p>
      <Button clicked={modalClosed} btnType="danger">
        ЗАКРЫТЬ
      </Button>
      <Button clicked={modalContinue} btnType="success">
        ПРОДОЛЖИТЬ
      </Button>
    </>
  );
};
