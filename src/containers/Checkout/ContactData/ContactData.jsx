import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../../../components/UI';
import { purchaseBurger } from '../../../redux/actions';
import { ContactDataForm } from '../../../forms/ContactDataForm';
import classes from './ContactData.module.css';

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
    <div className={classes.ContactData}>
      <ContactDataForm onSubmit={handleOrder} />
    </div>
  );
};
