import { Grid, Typography } from '@mui/material';
import React from 'react';
import { TestInfoOneText } from '../../../utils/constants';
interface InfoOneProp {
  style?: React.CSSProperties;
  className?: string;
  variant: 'subtitle2';
  color: 'text.primary';
}

const TestInfoOne = (props: InfoOneProp) => {
  return (
    <Grid container spacing={3} role="info" style={props.style}>
      <Grid item md={3} xs={3} sx={{padding:'0px !important'}}>
        <Typography
          variant={props.variant}
          className={props.className}
          color={props.color}
        >
          {TestInfoOneText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TestInfoOne;
