import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from 'src/store/actions';

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <Redirect to="/" />;
};
