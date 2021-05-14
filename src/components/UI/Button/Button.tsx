import styled from 'astroturf';

const NativeButton = styled.button<{ success: boolean; danger: boolean }>`
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

  &.success {
    color: #5c9210;
    margin: 10px 0;
  }

  &.danger {
    color: #944317;
    margin: 10px 0;
  }
`;

type Props = {
  children: React.ReactNode;
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
