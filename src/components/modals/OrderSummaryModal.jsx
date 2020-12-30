// @flow

import React, { type Node } from 'react';

import { OrderSummary } from '../Burger/OrderSummary';
import { Modal } from '../UI';
import type { Ingredient } from '../Burger/BurgerIngredient';

type Props = {
  handleCloseModal: () => void,
  ingredients: Ingredient[],
  handleModalContinue: () => void,
  totalPrice: number,
};

export const OrderSummaryModal = ({
  handleCloseModal,
  handleModalContinue,
  ingredients,
  totalPrice,
}: Props): Node => (
  <Modal onClick={handleCloseModal}>
    <OrderSummary
      ingredients={ingredients}
      onClose={handleCloseModal}
      onContinue={handleModalContinue}
      price={totalPrice}
    />
  </Modal>
);
