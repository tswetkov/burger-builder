import React from 'react';
import classes from './Button.module.css';

export const Button = ({ children, clicked, btnType, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};
