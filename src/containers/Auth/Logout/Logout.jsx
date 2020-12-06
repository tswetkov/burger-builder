import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions';
import { Redirect } from 'react-router-dom';

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <Redirect to="/" />;
};
