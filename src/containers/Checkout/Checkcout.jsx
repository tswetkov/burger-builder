// @flow

import React, { type Node } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckoutSummary } from 'components/Order/CheckoutSummary';

export const Checkout = (): Node => {
  const history = useHistory();

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinued = () => {
    history.replace('/contact-data');
  };

  return (
    <>
      <CheckoutSummary
        checkoutCancel={handleCheckoutCancel}
        checkoutContinued={handleCheckoutContinued}
      />
    </>
  );
};
