import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../utils/theme';

interface InputFieldProps {
  label: string;
  placeholder: string;
  testid?: string | 'inputfield';
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string | number;
  type ?: string;
}

const useStyles = makeStyles({
  textStyle: {
    fontSize: `${theme.spacing(3.5)} !important`,
    lineHeight: `${theme.spacing(4.5)} !important`,
  },
});

const InputField = (props: InputFieldProps) => {
  const classes = useStyles();
  return (
    <TextField
      sx={{ width: '100%' }}
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      variant="standard"
      color="info"
      focused
      data-testid={props.testid}
      onChange={(e) => props.onChange(e)}
      value={props.value}
      InputProps={{
        classes: {
          input: classes.textStyle,
        },
      }}
    />
  );
};

export default InputField;
