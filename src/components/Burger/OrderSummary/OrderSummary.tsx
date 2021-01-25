import styled from 'styled-components';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/UI';
import { Ingredient } from '../BurgerIngredient';

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
  onClose: () => void;
  onContinue: () => void;
  price: number;
  ingredients: Ingredient[];
};

export const OrderSummary = ({
  onClose,
  onContinue,
  price,
  ingredients,
}: Props) => {
  const { t } = useTranslation();
  // TODO: сделать красиво
  const transformed = ingredients.reduce((acc, value) => {
    acc[value] = acc[value] ? acc[value] + 1 : 1;

    return acc;
  }, {});

  const ingredientSummary = useMemo(
    () =>
      Object.keys(transformed).map((igKey, index) => (
        <li key={igKey + index}>
          <IngredientName>{t(igKey)}</IngredientName>: {transformed[igKey]}
        </li>
      )),
    [transformed],
  );

  return (
    <>
      <Title>{t('orderSummary.title')}</Title>
      <p>{t('orderSummary.subtitle')}:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>
          {t('orderSummary.price')}: {price.toFixed(2)}
        </strong>
      </p>
      <ButtonsWrapper>
        <Button onClick={onClose} btnType="danger">
          {t('orderSummary.close')}
        </Button>
        <Button onClick={onContinue} btnType="success">
          {t('orderSummary.next')}
        </Button>
      </ButtonsWrapper>
    </>
  );
};
