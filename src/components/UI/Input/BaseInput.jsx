import React from 'react';

import classes from './BaseInput.module.css';

export const BaseInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <input
        type="text"
        {...props}
        ref={ref}
        className={classes.InputElement}
      />
    </div>
  );
});
