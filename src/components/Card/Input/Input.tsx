import React, { useRef, useImperativeHandle } from 'react';
// import { TextField } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';

import classes from './Input.module.css';

interface InputProps {
   id: string;
   value: any;
   onChange: any;
   disabled: any;
   cols: number;
   rows: number;
  //  isValid: boolean;
}

const Input = React.forwardRef((props: InputProps, ref) => {
  const inputRef = useRef<any>(null);
  const activate = () => {
    inputRef.current?.focus();
  };
  useImperativeHandle(ref, () => ({
    focus: activate,
  }));

  return (
    <div
      className={classes.control}
    >
      <textarea
        ref={inputRef}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        cols={props.cols}
        rows={props.rows}
      />
      {/* {!props.isValid && <p className="error-text">Content must not be empty.</p>} */}
      {/* <TextField
        ref={inputRef}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        multiline
        rows={4}
      /> */}
    </div>
  );
});

export default Input;
