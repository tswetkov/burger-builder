import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CheckoutSummary } from '../../components/Order/CheckoutSummary';
import { ContactData } from './ContactData';

export const Checkout = ({ match, history }) => {
  const { ingredients, purchased } = useSelector((state) => ({
    ingredients: state.ingredients.ingredients,
    purchased: state.order.purchased,
  }));

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinued = () => {
    history.replace('/checkout/contact-data');
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
