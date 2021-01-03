// @flow

import styled from 'styled-components';
import React, { useMemo, type Node } from 'react';
import { Button } from 'components/UI';
import type { Ingredient } from '../BurgerIngredient';

const Title = styled.h3`
  text-align: center;
`;

const IngredientName = styled.span`
  text-transform: capitalize;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

type Props = {
  onClose: () => void,
  onContinue: () => void,
  price: number,
  ingredients: Ingredient[],
};

const dictionary = {
  bacon: 'бекон',
  cheese: 'сыр',
  meat: 'мясо',
  salad: 'салат',
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
          <IngredientName>{dictionary[igKey]}</IngredientName>:{' '}
          {transformed[igKey]}
        </li>
      )),
    [transformed],
  );

  return (
    <>
      <Title>Ваш заказ</Title>
      <p>Цифровой бургер из:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Конечная цена: {price.toFixed(2)}</strong>
      </p>
      <ButtonsWrapper>
        <Button onClick={onClose} btnType="danger">
          ЗАКРЫТЬ
        </Button>
        <Button onClick={onContinue} btnType="success">
          ПРОДОЛЖИТЬ
        </Button>
      </ButtonsWrapper>
    </>
  );
};
