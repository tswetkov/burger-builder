import * as React from 'react';
import styled, { css } from 'styled-components';

const successStyles = css`
  color: #5c9210;
  margin: 10px 0;
`;
const dangerStyles = css`
  color: #944317;
  margin: 10px 0;
`;

const NativeButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  @media (min-width: 500px) {
    padding: 5px;
  }

  ${({ success }) => (success ? successStyles : '')}

  ${({ danger }) => (danger ? dangerStyles : '')}
`;

type Props = {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  btnType: string;
};

export const Button = ({ children, onClick, disabled, btnType }: Props) => (
  <NativeButton
    disabled={disabled}
    onClick={onClick}
    success={btnType === 'success'}
    danger={btnType === 'danger'}
  >
    {children}
  </NativeButton>
);
