import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Spinner } from '../../../components/UI';
import { useForm } from 'react-hook-form';
import classes from './ContactData.module.css';
import { purchaseBurger } from '../../../redux/actions';
import { BaseInput } from '../../../components/UI/Input';

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

  const { register, handleSubmit } = useForm();

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
      <form onSubmit={handleSubmit(handleOrder)}>
        <h4>Введите Ваши данные:</h4>
        <BaseInput ref={register} placeholder="Имя" name="name" />

        <BaseInput ref={register} placeholder="Улица" name="street" />

        <BaseInput ref={register} placeholder="Индекс" name="index" />

        <BaseInput ref={register} placeholder="Страна" name="country" />

        <BaseInput ref={register} placeholder="Почта" name="email" />

        <Button btnType="Success">ЗАКАЗАТЬ</Button>
      </form>
    </div>
  );
};
