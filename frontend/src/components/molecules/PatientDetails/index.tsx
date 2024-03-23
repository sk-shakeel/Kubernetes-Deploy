import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { REPORTS, Svg, Test } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import DividerVertical from '../Divider';

export const PatientDetails = (props: PatientDetailsProps) => {
  return (
    <GridContainer container data-testid={props.testid}>
      <Grid item xs={12} md={12}>
        <ItemContainer container spacing={12} rowSpacing={2}>
          <Grid item><Typography>{props.patientName}</Typography></Grid>
          <Grid item>
            <Typography variant="subtitle2" color={theme.palette.secondary.contrastText} component={'span'}>{props.type} </Typography>
            <DividerVertical />
            <Typography  variant="subtitle2" color={theme.palette.secondary.contrastText}  component={'span'} > {props.gender} </Typography>
            <DividerVertical />
            <Typography  variant="subtitle2" color={theme.palette.secondary.contrastText} component={'span'} > {props.age} </Typography>
          </Grid>
        </ItemContainer>
      </Grid>
      <Grid item xs={12} md={12}>
        <ItemContainer container spacing={2}>
          <Grid item>  <Typography variant="h5" color={theme.palette.text.primary}> {props.testName} </Typography> </Grid>
          <Grid item><Typography component={'span'} variant='subtitle2'>${props.cost}</Typography>
            <DividerVertical />
            <Icons icon={Svg.trash2} width={'18px'} height={'18px'} />
          </Grid>
        </ItemContainer>
        <Grid item xs={12} md={12}><Typography  variant="subtitle2" color={theme.palette.secondary.contrastText} > {Test(props.noOfTest)} </Typography>         </Grid>
      </Grid>
      <Grid item xs={12} md={12} marginTop={theme.spacing(3)}> <Typography variant="h3" color={theme.palette.success.main}> {REPORTS} </Typography></Grid>
    </GridContainer>
  );
};

export interface PatientDetailsProps {
  patientName: string;
  type: string;
  gender: string;
  age: number;
  testName: string;
  cost: number;
  noOfTest: number;
  testid: string;
}

const GridContainer = styled(Grid)({
  width: theme.spacing(108.5),
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4),
  gap: theme.spacing(2),
});

const ItemContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
});
