/* eslint-disable react/jsx-boolean-value */
import React, { useRef, useImperativeHandle } from 'react';
// import { TextField } from '@material-ui/core';
import classes from './Input.module.css';

interface InputProps {
   id: string;
   value: any;
   onChange: any;
   disabled: any;
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
      />
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
