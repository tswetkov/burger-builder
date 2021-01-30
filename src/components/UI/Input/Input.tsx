import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'astroturf';

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
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

  &.invalid {
    border: 1px solid tomato;
    background-color: #fda49a;
  }
`;

const InputError = styled.p`
  text-align: left;
  color: tomato;
  margin: 5px 0;
`;

type Props = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
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
