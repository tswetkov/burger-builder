import * as React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Backdrop } from 'src/components/UI/Backdrop';

const ModalBody = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px 40px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

type Props = {
  children: any;
  onClick: () => void;
};

export const Modal = ({ children, onClick }: Props) => {
  const modalRoot = document.getElementById('modal');
  if (!modalRoot) throw new Error('Root element for modal is not found');

  return createPortal(
    <>
      <Backdrop onClick={onClick} />
      <ModalBody>{children}</ModalBody>
    </>,
    modalRoot,
  );
};
