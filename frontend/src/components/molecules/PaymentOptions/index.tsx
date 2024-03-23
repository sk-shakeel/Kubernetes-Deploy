import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

interface PaymentProps {
  icon: Svg;
  value: string;
  label: string;
}

export interface PaymentOptionsProps {
  options: Array<PaymentProps>;
}

const DivContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const RadioButton = styled(Radio)({
  color: theme.palette.grey[300],
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
  fontSize: theme.spacing(4.25),
});

const FormControlOption = styled(FormControl)({
  width: '100%',
  minWidth: theme.spacing(105),
});

const DivItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const TypographyItem = styled(Typography)({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
});

const PaymentOptions = (props: PaymentOptionsProps) => {
  return (
    <FormControlOption data-testid="paymentoptions">
      <RadioGroup defaultValue="googlepay">
        {props.options.map((option, key) => {
          return (
            <DivContainer key={key}>
              <DivItem>
                <Icons icon={option.icon} width={'30px'} height={'30px'} />
                <TypographyItem variant="caption">
                  {option.label}
                </TypographyItem>
              </DivItem>
              <FormControlLabel
                value={option.value}
                control={<RadioButton />}
                label={undefined}
                labelPlacement="start"
              />
            </DivContainer>
          );
        })}
      </RadioGroup>
    </FormControlOption>
  );
};

export default PaymentOptions;
