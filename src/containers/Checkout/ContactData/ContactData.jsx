import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../../../components/UI';
import { purchaseBurger } from '../../../redux/actions';
import { ContactDataForm } from '../../../forms';
import styled from 'styled-components';
import { history } from '../../../utils';

const ContactDataWrapper = styled.div`
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  align-self: center;
  margin: auto 0;

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

  console.log('ingredients', ingredients);
  useEffect(() => {
    if (ingredients.length === 0) {
      history.push('/');
    }
  }, [ingredients]);

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
