import React, { memo } from 'react';

import classes from './Modal.module.css';
import { Backdrop } from '../Backdrop';

export const Modal = memo(
  function Modal({ children, show, modalClosed }) {
    return (
      <>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {children}
        </div>
      </>
    );
  },
  (prevProps, nextProps) =>
    nextProps.show !== prevProps.show ||
    nextProps.children !== prevProps.children,
);
