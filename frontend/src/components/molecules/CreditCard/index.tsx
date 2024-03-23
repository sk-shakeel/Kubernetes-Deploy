import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  CARD_HOLDER,
  creditcardFormat,
  EXPIRES,
  SAMPLE,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface CreditCardProps {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
}

const GridContainer = styled(Grid)({
  height: theme.spacing(50),
  width: '433px',
  borderRadius: theme.spacing(4),
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.7)',
  paddingLeft: theme.spacing(7.5),
  paddingRight: theme.spacing(7.5),
  background: theme.palette.grey[800],
});

const CreditContainer = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: theme.spacing(7.5),
});

const CreditCard = (props: CreditCardProps) => {
  return (
    <GridContainer container data-testid="creditcard">
      <Grid item xs={12} md={12}>
        <CreditContainer container>
          <Grid item>
            <Icons icon={"creditcardcolor"} width={''} height={''}/>
          </Grid>
          <Grid item>
            <Typography
              color={theme.palette.secondary.contrastText}
              variant={'body2'}
            >
              {SAMPLE}
            </Typography>
          </Grid>
        </CreditContainer>
      </Grid>

      <Grid item xs={12} md={12}>
        <Typography color={theme.palette.text.primary} variant="body1">
          {creditcardFormat(props.cardNumber)}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={12}>
          <Grid item>
            <Typography
              color={theme.palette.secondary.contrastText}
              variant={'body2'}
            >
              {CARD_HOLDER}
            </Typography>
            <Typography variant="overline" color={theme.palette.text.secondary}>
              {props.cardHolder}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color={theme.palette.secondary.contrastText}
              variant={'body2'}
            >
              {EXPIRES}
            </Typography>
            <Typography variant="overline" color={theme.palette.text.secondary}>
              {props.expiry}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default CreditCard;
