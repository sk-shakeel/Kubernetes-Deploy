import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  TimeSelectorValues,
  APPOINTMENT_HEADING,
  APPOINTMENT_TIME_RANGE,
} from '../../../utils/constants';
import MonthDaySelector from '../../molecules/MonthDaySelector';
import TimeSelector from '../../molecules/TimeSelector';
import MonthSelector from '../../molecules/MonthSelector';

const GridContainer = styled(Grid)({
  width: '100%',
  maxWidth: theme.spacing(145.75),
  background: theme.palette.grey[800],
  padding: theme.spacing(6),
  borderRadius: theme.spacing(2),
});

const AppointmentDate = () => {
  return (
    <GridContainer container rowSpacing={12} sx={boxShadowStyle}>
      <Grid item>
        <Typography color={theme.palette.text.primary} variant="subtitle1">
          {APPOINTMENT_HEADING}
        </Typography>
      </Grid>
      <Grid item>
        <MonthSelector />
      </Grid>
      <Grid item>
        <MonthDaySelector selectorType="day" />
      </Grid>
      <Grid item>
        <TimeSelector
          timeValues={TimeSelectorValues[0]}
          timeHeader={APPOINTMENT_TIME_RANGE[0]}
        />
      </Grid>
      <Grid item>
        <TimeSelector
          timeValues={TimeSelectorValues[1]}
          timeHeader={APPOINTMENT_TIME_RANGE[1]}
        />
      </Grid>
    </GridContainer>
  );
};

export default AppointmentDate;

const boxShadowStyle = {
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
}