import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  style?: React.CSSProperties;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      className={props.className}
      style={props.style}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </Button>
  );
};
