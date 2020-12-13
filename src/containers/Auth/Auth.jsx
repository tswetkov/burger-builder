import React, { useCallback } from 'react';

import { Button } from '../../components/UI';
import { useForm } from 'react-hook-form';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { auth } from '../../redux/actions';
import { BaseInput } from '../../components/UI/Input';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleAuthSubmit = useCallback(
    ({ email, password }) => {
      dispatch(auth(email, password));
    },
    [dispatch],
  );

  return (
    <div className={classes.Auth}>
      <form onSubmit={handleSubmit(handleAuthSubmit)}>
        <BaseInput
          name="email"
          ref={register}
          className={classes.Input}
          type="text"
          placeholder="Mail Address"
        />
        <BaseInput
          name="password"
          ref={register}
          className={classes.Input}
          type="password"
          placeholder="Password"
        />
        <Button btnType="Success" disabled={Object.keys(errors).length}>
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
