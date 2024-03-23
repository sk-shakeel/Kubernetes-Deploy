import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  COSTFORMAT,
  REPORTFORMAT,
  TESTNUMBER,
  VIEWDETAILS,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface TestPackageCardProps {
  image: string;
  testpackage: string;
  cost: number;
  report_time: number;
  noOfTest: number;
  testid: string;
}

const GridContainer = styled(Grid)({
  width: '100%',
  maxWidth: theme.spacing(95.5),
  padding: theme.spacing(3),
  boxShadow: '0px 0px 12px 0px rgba(233, 232, 237, 0.53)',
});

const TestPackageCard = (props: TestPackageCardProps) => {
  return (
    <GridContainer container data-testid={props.testid}>
      <Grid>
        <Icons icon={props.image} width={''} height={''} />
      </Grid>
      <Grid item xs={6.8} md={6.8} marginLeft={theme.spacing(2.3)}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Typography color={theme.palette.text.primary} variant="body1">
              {props.testpackage}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography color={theme.palette.text.secondary} variant="body2">
              {COSTFORMAT}
              {props.cost}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h4"
              color={theme.palette.secondary.contrastText}
            >
              {REPORTFORMAT(props.report_time)}
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              color={theme.palette.secondary.contrastText}
              variant="h4"
            >
              {TESTNUMBER(props.noOfTest)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} marginTop={theme.spacing(12.25)}>
            <Typography
              sx={{ textDecoration: 'underline' }}
              color={theme.palette.secondary.contrastText}
              variant="subtitle2"
            >
              {VIEWDETAILS}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default TestPackageCard;
