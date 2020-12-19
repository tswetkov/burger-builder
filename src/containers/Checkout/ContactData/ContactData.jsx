import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../../../components/UI';
import { purchaseBurger } from '../../../redux/actions';
import { ContactDataForm } from '../../../forms';
import styled from 'styled-components';

const ContactDataWrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 510px;
  }
`;

export const ContactData = () => {
  const { ingredients, price, loading, token, userId } = useSelector(
    (state) => ({
      ingredients: state.ingredients.ingredients,
      price: state.ingredients.totalPrice,
      loading: state.order.loading,
      token: state.auth.token,
      userId: state.auth.userId,
    }),
  );

  const dispatch = useDispatch();

  const onOrderBurger = useCallback(
    (orderData, token) => dispatch(purchaseBurger(orderData, token)),
    [dispatch],
  );

  const handleOrder = useCallback(
    (formData) => {
      const order = {
        ingredients: ingredients,
        price: price,
        orderData: { ...formData, deliveryMethod: 'fastest' },
        userId: userId,
      };

      onOrderBurger(order, token);
    },
    [ingredients, onOrderBurger, price, token, userId],
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <ContactDataWrapper>
      <ContactDataForm onSubmit={handleOrder} />
    </ContactDataWrapper>
  );
};
