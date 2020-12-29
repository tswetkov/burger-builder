// @flow

import React, { type Node } from 'react';

import { Input } from '../components/UI/Input';
import { Button } from '../components/UI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authFormValidationSchema } from './validations';

type FormData = {
  email: string,
  password: string,
};
type Props = {
  onSubmit: (data: FormData) => void,
};

export const SignInForm = ({ onSubmit }: Props): Node => {
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

      <Button btnType="success" disabled={Object.keys(errors).length > 0}>
        SUBMIT
      </Button>
    </form>
  );
};
