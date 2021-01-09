// @flow

import React, { type Node, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckoutSummary } from 'components/Order/CheckoutSummary';

export const Checkout = (): Node => {
  const history = useHistory();

  const handleCheckoutCancel = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleCheckoutContinued = useCallback(() => {
    history.replace('/contact-data');
  }, [history]);

  return (
    <CheckoutSummary
      checkoutCancel={handleCheckoutCancel}
      checkoutContinued={handleCheckoutContinued}
    />
  );
};
