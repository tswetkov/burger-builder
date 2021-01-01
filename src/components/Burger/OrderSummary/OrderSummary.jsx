// @flow

import React, { useMemo, type Node } from 'react';
import { Button } from 'components/UI';
import type { Ingredient } from '../BurgerIngredient';

type Props = {
  onClose: () => void,
  onContinue: () => void,
  price: number,
  ingredients: Ingredient[],
};

export const OrderSummary = ({
  onClose,
  onContinue,
  price,
  ingredients,
}: Props): Node => {
  // TODO: сделать красиво
  const transformed = ingredients.reduce((acc, value) => {
    acc[value] = acc[value] ? acc[value] + 1 : 1;

    return acc;
  }, {});

  const ingredientSummary = useMemo(
    () =>
      Object.keys(transformed).map((igKey, index) => (
        <li key={igKey + index}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {transformed[igKey]}
        </li>
      )),
    [transformed],
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
      <Button onClick={onClose} btnType="danger">
        ЗАКРЫТЬ
      </Button>
      <Button onClick={onContinue} btnType="success">
        ПРОДОЛЖИТЬ
      </Button>
    </>
  );
};
