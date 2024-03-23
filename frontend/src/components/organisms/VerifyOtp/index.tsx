import { Grid, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../utils/theme';
import {
  EnterOtpMessage,
  SetButtonEnable,
  VERIFY,
  WelcomeMessage,
} from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { CompanyLogo } from '../../atoms/Logo';
import LoginOtpScreen, { useGlobalOtpState } from '../LoginOtpScreen';
import { Login} from '../../../services';
import { useAuth0 } from '@auth0/auth0-react';

interface VerifyOtpProps {
  username: string;
}

const GridContainer = styled(Grid)({
  width: '100%',
  minHeight: theme.spacing(136),
  borderRadius: theme.spacing(2),
  maxWidth: theme.spacing(95.5),
  background: theme.palette.grey[800],
});

const VerifyOtp = (props: VerifyOtpProps) => {
  const navigate = useNavigate();
  const {user} = useAuth0();
  const [otplength] = useGlobalOtpState();
  const [buttonEnable, setButtonEnable] = useState(false);

  useEffect(() => {
    const enable = SetButtonEnable(otplength.length);
    setButtonEnable(enable);
  }, [buttonEnable, otplength.length]);

  return (
    <GridContainer container padding={theme.spacing(6)}>
      <Grid item xs={12} md={12}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <CompanyLogo weight={'500'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} marginTop="0px">
        <Typography color={theme.palette.text.primary} variant="subtitle1">
          {WelcomeMessage(props.username)}
        </Typography>
        <Typography
          variant="h3"
          color={theme.palette.secondary.contrastText}
          fontWeight={theme.typography.fontWeightRegular}
        >
          {EnterOtpMessage}
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} marginTop={theme.spacing(12)}>
        <LoginOtpScreen />
      </Grid>
      <Grid item xs={12} md={12} marginBottom={theme.spacing(30)}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12} md={12}>
            <CustomButton
              onClick={() => {navigate('/home');Login(user)}}
              style={{
                color: theme.palette.grey[800],
                width: '100%',
                height: '100%',
                fontWeight: 600,
                borderRadius: theme.spacing(2),
              }}
              variant="contained"
              disabled={buttonEnable}
              label={VERIFY}
            />
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default VerifyOtp;
