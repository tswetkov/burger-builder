import * as React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const invalidInputStyles = css`
  border: 1px solid tomato;
  background-color: #fda49a;
`;

const InputElement = styled.input<{ invalid: boolean }>`
  outline: none;
  border: 1px solid #ccc;
  background-color: var(--app-color-white);
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  ${({ invalid }) =>
    invalid
      ? `
          ${invalidInputStyles}
        `
      : ''}
`;

const InputError = styled.p`
  text-align: left;
  color: tomato;
  margin: 5px 0;
`;

type Props = {
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const hasError = props.error?.length;

  return (
    <InputWrapper>
      <InputElement
        type="text"
        ref={ref}
        {...props}
        invalid={Boolean(hasError)}
      />
      {hasError && <InputError>{props.error}</InputError>}
    </InputWrapper>
  );
});
