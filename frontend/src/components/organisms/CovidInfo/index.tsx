import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  COVIDRTPCRTEST,
  PACKAGE_QUESTION,
  Svg,
} from '../../../utils/constants';
import RtpcrInfo from '../../molecules/CovidRtpcrTestInfo';
import CovidTestSteps from '../../molecules/CovidTestSteps';

interface Feature {
  icon: Svg;
  feature: string;
}

export interface CovidInfoProps {
  features: Array<Feature>;
  packageBenifits: Array<string>;
  cost: number;
  reportTime: number;
  packagePoints: Array<string>;
}

const GridContainer = styled(Grid)({
  width: '100%',
  borderRadius: theme.spacing(4),
  background: theme.palette.grey[800],
  maxWidth: theme.spacing(145.75),
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  padding: theme.spacing(4)
});

const PackageItem = styled(Grid)({
  width: '100%',
  maxWidth: theme.spacing(40.725),
  background: theme.palette.primary.light,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
});

const UL = styled('ul')({
  padding: theme.spacing(4),
});

const PackageContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
});

const CovidInfo = (props: CovidInfoProps) => {
  return (
    <GridContainer container rowGap={3} data-testid="covidinfo">
      <Grid item xs={12} md={12} marginTop={theme.spacing(6)}>
        <Typography color={theme.palette.text.primary} variant="subtitle1">
          {COVIDRTPCRTEST}
        </Typography>
      </Grid>
      <PackageContainer item width={'100%'} marginTop={theme.spacing(5)}>
        {props.features.map((feature, key) => {
          return (
            <CovidTestSteps
              key={key}
              name={feature.feature}
              iconImg={feature.icon}
            />
          );
        })}
      </PackageContainer>

      <Grid item xs={12} md={12} marginTop={theme.spacing(2)}>
        <RtpcrInfo cost={props.cost} reportTime={props.reportTime} />
      </Grid>
      <Grid item>
        <UL>
          {props.packagePoints.map((point, key) => {
            return (
              <Grid item key={key}>
                <li>
                  <Typography color={theme.palette.text.secondary} variant="h5">
                    {point}
                  </Typography>
                </li>
              </Grid>
            );
          })}
        </UL>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item xs={12} md={12} marginBottom={theme.spacing(2)}>
            <Typography color={theme.palette.info.main} variant="h6">
              {PACKAGE_QUESTION}
            </Typography>
          </Grid>
          <PackageContainer container>
            {props.packageBenifits.map((benifit, key) => {
              return (
                <PackageItem item key={key}>
                  <Typography color={theme.palette.text.primary} variant="h5">
                    {benifit}
                  </Typography>
                </PackageItem>
              );
            })}
          </PackageContainer>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default CovidInfo;
