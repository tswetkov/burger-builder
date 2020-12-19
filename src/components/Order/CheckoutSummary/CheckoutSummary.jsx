import React from 'react';
import styled from 'styled-components';

import { Burger } from '../../Burger';
import { Button } from '../../UI';


const CheckoutSummaryWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

export const CheckoutSummary = ({
  ingredients,
  checkoutCancel,
  checkoutContinued,
}) => {
  return (
    <CheckoutSummaryWrapper>
      <h1>Я надеюсь, что это вкусно</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button clicked={checkoutCancel} btnType="danger">
        ОТМЕНА
      </Button>
      <Button clicked={checkoutContinued} btnType="success">
        ПРОДОЛЖИТЬ
      </Button>
    </CheckoutSummaryWrapper>
  );
};
