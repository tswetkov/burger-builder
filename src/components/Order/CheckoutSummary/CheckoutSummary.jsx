// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import { Burger } from 'components/Burger';
import { Button } from 'components/UI';
import type { Ingredient } from 'components/Burger/BurgerIngredient';

const CheckoutSummaryWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

type Props = {
  ingredients: Ingredient[],
  checkoutCancel: () => void,
  checkoutContinued: () => void,
};

export const CheckoutSummary = ({
  ingredients,
  checkoutCancel,
  checkoutContinued,
}: Props): Node => (
  <CheckoutSummaryWrapper>
    <h1>Я надеюсь, что это вкусно</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button onClick={checkoutCancel} btnType="danger">
      ОТМЕНА
    </Button>
    <Button onClick={checkoutContinued} btnType="success">
      ПРОДОЛЖИТЬ
    </Button>
  </CheckoutSummaryWrapper>
);
