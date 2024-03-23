import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
interface TestStepsProp {
  name: string;
  iconImg: Svg;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: `${theme.spacing(10)} !important`,
  },
  textStyle: {
    display: 'flex',
    paddingLeft: theme.spacing(1.25),
  },
});

const CovidTestSteps = (props: TestStepsProp) => {
  const classes = useStyles();
  return (
    <Grid container role="covidtestinfoitemtwo">
      <Grid item className={classes.container}>
        <Icons
          icon={props.iconImg}
          width={theme.spacing(11)}
          height={theme.spacing(11)}
        />
        <Typography
          className={classes.textStyle}
          color="text.primary"
          variant="overline"
        >
          {props.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CovidTestSteps;
