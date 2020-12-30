// @flow

import React, { type Node } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI';
import { contactDataValidationSchema } from './validations';

type FormData = {
  name: string,
  street: string,
  index: string,
  country: string,
  email: string,
};
type Props = {
  onSubmit: (data: FormData) => void,
};

export const ContactDataForm = ({ onSubmit }: Props): Node => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactDataValidationSchema),
    mode: 'all',
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Введите Ваши данные:</h4>

      <Input
        ref={register}
        placeholder="Имя"
        name="name"
        error={errors.name?.message}
      />

      <Input
        ref={register}
        placeholder="Улица"
        name="street"
        error={errors.street?.message}
      />

      <Input
        ref={register}
        placeholder="Индекс"
        name="index"
        error={errors.index?.message}
      />

      <Input
        ref={register}
        placeholder="Страна"
        name="country"
        error={errors.country?.message}
      />

      <Input
        ref={register}
        placeholder="Почта"
        name="email"
        error={errors.email?.message}
      />

      <Button btnType="success">ЗАКАЗАТЬ</Button>
    </form>
  );
};
