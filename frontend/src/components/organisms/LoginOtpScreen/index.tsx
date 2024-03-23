import { Grid, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import OtpInput from 'react-otp-input';
import theme from '../../../utils/theme';
import { createGlobalState } from 'react-use';
import { OTP } from '../../../utils/constants';

const GridContainer = styled(Grid)({
  width: theme.spacing(83.5),
  height: theme.spacing(15),
});

export let Otp = '';

export const useGlobalOtpState = createGlobalState<string>('');

const LoginOtpScreen = () => {
  const [otp, setOtp] = useGlobalOtpState();

  useEffect(() => {
    Otp = otp;
  }, [otp]);

  return (
    <GridContainer container data-testid="otpcontainer">
      <Grid item xs={12} md={12}>
        <Typography
          color={theme.palette.text.disabled}
          variant="subtitle2"
          fontWeight={theme.typography.fontWeightMedium}
        >
          {OTP}
        </Typography>
      </Grid>
      <Grid item>
        <OtpInput
          data-testid="otpitem"
          value={otp}
          onChange={(otp: string) => {
            setOtp(otp);
          }}
          numInputs={4}
          inputStyle={{
            fontSize: '24px',
            width: theme.spacing(9),
            margin: theme.spacing(1),
            borderTop: '0px',
            borderLeft: '0px',
            borderRight: '0px',
            outline: 'none',
            borderColor: theme.palette.grey[300],
          }}
          isInputNum
        />
      </Grid>
    </GridContainer>
  );
};

export default LoginOtpScreen;
