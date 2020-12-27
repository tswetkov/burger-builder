import React from 'react';

import { OrderSummary } from '../Burger/OrderSummary';
import { Modal } from '../UI';

export const OrderSummaryModal = ({
  handleCloseModal,
  ingredients,
  handleModalContinue,
  totalPrice,
}) => (
  <Modal modalClosed={handleCloseModal}>
    <OrderSummary
      ingredients={ingredients}
      modalClosed={handleCloseModal}
      modalContinue={handleModalContinue}
      price={totalPrice}
    />
  </Modal>
);
