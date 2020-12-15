import React from 'react';

import { BaseInput } from '../components/UI/Input';
import classes from '../containers/SignIn/SignIn.module.css';
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
      <BaseInput
        name="email"
        ref={register}
        className={classes.Input}
        type="text"
        placeholder="email@email.com"
        error={errors.email?.message}
      />
      <BaseInput
        name="password"
        ref={register}
        className={classes.Input}
        type="password"
        placeholder="password"
        error={errors.password?.message}
      />

      <Button btnType="Success" disabled={Object.keys(errors).length}>
        SUBMIT
      </Button>
    </form>
  );
};
