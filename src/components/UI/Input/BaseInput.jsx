import React from 'react';
import cn from 'classnames';
import classes from './BaseInput.module.css';

export const BaseInput = React.forwardRef((props, ref) => {
  const hasError = props.error?.length;

  return (
    <div className={classes.inputWrapper}>
      <input
        type="text"
        {...props}
        ref={ref}
        className={cn(classes.input, {
          [classes.invalid]: hasError,
        })}
      />
      {hasError && <p className={classes.error}>{props.error}</p>}
    </div>
  );
});
