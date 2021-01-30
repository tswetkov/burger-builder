import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'astroturf';

import { auth } from 'src/store/actions';
import { SignInForm } from 'src/forms';

const SignInWrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 510px;
  }
`;

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleAuthSubmit = useCallback(
    ({ email, password }) => {
      dispatch(auth(email, password));
    },
    [dispatch],
  );

  return (
    <SignInWrapper>
      <SignInForm onSubmit={handleAuthSubmit} />
    </SignInWrapper>
  );
};
