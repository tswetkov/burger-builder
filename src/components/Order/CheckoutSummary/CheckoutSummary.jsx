import React from 'react';

import { Burger } from '../../Burger';
import { Button } from '../../UI';

import classes from './CheckoutSummary.module.css';

export const CheckoutSummary = ({
  ingredients,
  checkoutCancel,
  checkoutContinued,
}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Я надеюсь, что это вкусно</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button clicked={checkoutCancel} btnType="Danger">
        ОТМЕНА
      </Button>
      <Button clicked={checkoutContinued} btnType="Success">
        ПРОДОЛЖИТЬ
      </Button>
    </div>
  );
};
