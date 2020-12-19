import React from 'react';

import { Input } from '../components/UI/Input';
import { Button } from '../components/UI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authFormValidationSchema } from './validations';

export const SignInForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(authFormValidationSchema),
    mode: 'all',
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        ref={register}
        type="text"
        placeholder="email@email.com"
        error={errors.email?.message}
      />
      <Input
        name="password"
        ref={register}
        type="password"
        placeholder="password"
        error={errors.password?.message}
      />

      <Button btnType="success" disabled={Object.keys(errors).length}>
        SUBMIT
      </Button>
    </form>
  );
};
