import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  COMMENT,
  INSTRUCTIONS,
  ORDER_PLACED,
  Svg,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

const GridContainer = styled(Grid)({
  width: theme.spacing(120.5),
  height: theme.spacing(61.25),
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
});

const OrderPlaced = () => {
  return (
    <GridContainer
      padding={theme.spacing(6)}
      container
      data-testid="orderContainer"
    >
      <Grid item>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography data-testid="heading" variant="subtitle1">
              {ORDER_PLACED}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} marginTop={theme.spacing(10.25)}>
          <Grid container>
            <Grid item sx={{display:'flex',width:'7.4rem',justifyContent:'space-between'}}>
              <Icons
                    icon={Svg.info}
                    width={theme.spacing(3.3325)}
                    height={theme.spacing(3.3325)}
                  />
              <Typography
                color={theme.palette.primary.dark}
                data-testid="instructions"
              >{INSTRUCTIONS}
              </Typography>
            </Grid>
            <Grid item marginTop={theme.spacing(2)}>
              <Typography
                data-testid="comment"
                variant="caption"
                color={theme.palette.text.secondary}
              >
                {COMMENT}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default OrderPlaced;
