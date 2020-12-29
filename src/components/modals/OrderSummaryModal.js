// @flow

import React, { type Node } from 'react';

import { OrderSummary } from '../Burger/OrderSummary';
import { Modal } from '../UI';
type Props = {
  handleCloseModal: () => void,
  ingredients: string[],
  handleModalContinue: () => void,
  totalPrice: string,
};

export const OrderSummaryModal = ({
  handleCloseModal,
  ingredients,
  handleModalContinue,
  totalPrice,
}: Props): Node => (
  <Modal modalClosed={handleCloseModal}>
    <OrderSummary
      ingredients={ingredients}
      modalClosed={handleCloseModal}
      modalContinue={handleModalContinue}
      price={totalPrice}
    />
  </Modal>
);
