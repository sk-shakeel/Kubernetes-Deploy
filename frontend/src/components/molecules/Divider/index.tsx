import { Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';

const DividerVertical = () => {
  return (
    <Typography
      data-testid="divider"
      component={'span'}
      color={theme.palette.secondary.light}
      marginRight={theme.spacing(1)}
    >
      |
    </Typography>
  );
};

export default DividerVertical;
