import React, { useCallback } from 'react';

import classes from './SignIn.module.css';
import { useDispatch } from 'react-redux';

import { auth } from '../../redux/actions';
import { SignInForm } from '../../forms';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleAuthSubmit = useCallback(
    ({ email, password }) => {
      dispatch(auth(email, password));
    },
    [dispatch],
  );

  return (
    <div className={classes.Auth}>
      <SignInForm onSubmit={handleAuthSubmit} />
    </div>
  );
};
