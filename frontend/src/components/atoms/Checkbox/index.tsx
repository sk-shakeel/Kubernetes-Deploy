import React from 'react';
import Checkbox from '@mui/material/Checkbox';
interface CheckboxProp {
  style?: React.CSSProperties;
  className?: string;
  onClick: () => void;
  color: 'secondary';
}

const CheckboxBtn = (props: CheckboxProp) => {
  return (
    <Checkbox
      role="checkboxbtn"
      color={props.color}
      sx={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default CheckboxBtn;
