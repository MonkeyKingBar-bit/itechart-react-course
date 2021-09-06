import React from 'react';

interface ButtonProps {
   name: string;
   disabled: any;
   onClick: any;
   className: string;
}

const ButtonCard = (props: ButtonProps) => {
  const {
    name, disabled, onClick, className,
  } = props;
  return (
    <button type="button" disabled={disabled} className={className} onClick={onClick}>{name}</button>
  );
};
export default ButtonCard;
