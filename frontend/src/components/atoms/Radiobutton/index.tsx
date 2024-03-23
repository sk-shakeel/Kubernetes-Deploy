import React from 'react';
import { Radio, RadioProps } from '@mui/material';
import theme from '../../../utils/theme';

interface RadioButtonProps extends RadioProps {
  isChecked?: boolean;
  handleChecked?: () => void;
}

const RadioButton = ({
  isChecked,
  handleChecked,
  ...props
}: RadioButtonProps) => {
  return (
    <Radio
      data-testid="RadioButton"
      checked={isChecked}
      onClick={handleChecked}
      disableRipple
      sx={{
        color: theme.palette.grey[300],
        '&.Mui-checked': {
          color: theme.palette.secondary.main,
        },
        fontSize: theme.spacing(4.25),
      }}
      {...props}
    ></Radio>
  );
};

export default RadioButton;
