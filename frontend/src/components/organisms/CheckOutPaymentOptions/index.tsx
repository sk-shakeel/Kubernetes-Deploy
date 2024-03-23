import {Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  ADD_CARD,
  CardPaymentHeader,
  options,
  PaymentOptionsHeader,
  Svg,
} from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import CreditCard from '../../molecules/CreditCard';
import PaymentOptions from '../../molecules/PaymentOptions';

const PaymentHeaderContainer = styled(Grid)({});

const GridContainer = styled(Grid)({
  width: theme.spacing(120.5),
  height: '569px',
  padding: theme.spacing(6),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  background: theme.palette.grey[800],
});

const CheckoutPaymentOptions = () => {
  return (
    <GridContainer container>
      <Grid item xs={12} md={12}>
        <PaymentHeaderContainer container rowGap={8} alignItems={'center'}>
          <Grid item>
            <Typography
              variant="subtitle1"
              color={theme.palette.text.secondary}
            >
              {CardPaymentHeader}
            </Typography>
          </Grid>
          <Grid item marginLeft={'auto'}>
            <CustomButton
              label={ADD_CARD}
              style={{
                color: 'primary.main',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '16px',
              }}
              startIcon={
                <Icons icon={Svg.vector} width={'12px'} height={'12px'} />
              }
              variant={'text'}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CreditCard
              cardHolder={'Jack'}
              cardNumber={'12345'}
              expiry={'03/09'}
            />
          </Grid>
        </PaymentHeaderContainer>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container rowGap={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {PaymentOptionsHeader}
            </Typography>
          </Grid>
          <Grid item>
            <PaymentOptions options={options} />
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default CheckoutPaymentOptions;
