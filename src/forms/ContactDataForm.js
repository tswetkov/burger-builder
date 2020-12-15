import React from 'react';

import { BaseInput } from '../components/UI/Input';
import { Button } from '../components/UI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { contactDataValidationSchema } from './validations';

export const ContactDataForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactDataValidationSchema),
    mode: 'all',
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Введите Ваши данные:</h4>

      <BaseInput
        ref={register}
        placeholder="Имя"
        name="name"
        error={errors.name?.message}
      />

      <BaseInput
        ref={register}
        placeholder="Улица"
        name="street"
        error={errors.street?.message}
      />

      <BaseInput
        ref={register}
        placeholder="Индекс"
        name="index"
        error={errors.index?.message}
      />

      <BaseInput
        ref={register}
        placeholder="Страна"
        name="country"
        error={errors.country?.message}
      />

      <BaseInput
        ref={register}
        placeholder="Почта"
        name="email"
        error={errors.email?.message}
      />

      <Button btnType="Success">ЗАКАЗАТЬ</Button>
    </form>
  );
};
