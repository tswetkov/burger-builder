// @flow

import React, { type Node } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CheckoutSummary } from 'components/Order/CheckoutSummary';

export const Checkout = (): Node => {
  const history = useHistory();
  const { ingredients, purchased } = useSelector((state) => ({
    ingredients: state.ingredients.ingredients,
    purchased: state.order.purchased,
  }));

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinued = () => {
    history.replace('/contact-data');
  };

  if (ingredients) {
    const purchasedRedirect = purchased ? <Redirect to="/" /> : null;

    return (
      <>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancel={handleCheckoutCancel}
          checkoutContinued={handleCheckoutContinued}
        />
      </>
    );
  }

  return <Redirect to="/" />;
};
