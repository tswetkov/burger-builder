import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { Spinner } from 'src/components/UI';
import { purchaseBurger } from 'src/store/actions';
import { ContactDataForm } from 'src/forms';
import { history } from 'src/utils';

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

  useEffect(() => {
    if (ingredients.length === 0) {
      history.push('/');
    }
  }, [ingredients]);

  const onOrderBurger = useCallback(
    (orderData, userToken) => dispatch(purchaseBurger(orderData, userToken)),
    [dispatch],
  );

  const handleOrder = useCallback(
    (formData) => {
      const order = {
        ingredients,
        price,
        orderData: { ...formData, deliveryMethod: 'fastest' },
        userId,
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
