import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface TestCardProps {
  icon: Svg;
  testName: string;
  onclick: () => void;
  testid: string;
}

const GridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(70.75),
  height: theme.spacing(29),
});

const IconItem = styled(Grid)({
  background: theme.palette.grey[900],
  cursor: "pointer"
});

const TestCard = (props: TestCardProps) => {
  return (
    <GridContainer container data-testid={props.testid}>
      <IconItem item>
        <Icons
          icon={props.icon}
          width={'50px'}
          height={'50px'}
          onClick={props.onclick}
        />
      </IconItem>
      <Grid item marginTop={theme.spacing(3.5)}>
        <Typography variant="h3" color={theme.palette.text.secondary}>
          {props.testName}
        </Typography>
      </Grid>
    </GridContainer>
  );
};

export default TestCard;
