import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface TestimonialCardProps {
  customerName: string;
  designation: string;
  testimony: string;
  testid ?: string;
  testimonyImg ?: Svg;
}

const GridConatiner = styled(Grid)({
  width: theme.spacing(95.5),
  height: theme.spacing(43),
  padding: theme.spacing(5),
  borderRadius: theme.spacing(2),
  background: theme.palette.grey[800],
});

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <GridConatiner container data-testid={props.testid}>
      <Grid item xs={1} md={1} data-testid="avatar">
        <Icons
          icon={props.testimonyImg ? props.testimonyImg : Svg.avatar}
          width={theme.spacing(8)}
          height={theme.spacing(8)}
        />
      </Grid>
      <Grid item xs={10} md={10} marginLeft={theme.spacing(4.5)}>
        <Grid container>
          <Grid item>
            <Typography
              data-testid="customerName"
              variant="h3"
              color={theme.palette.text.secondary}
            >
              {props.customerName}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            data-testid="designation"
            variant="overline"
            color={theme.palette.secondary.contrastText}
          >
            {props.designation}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            data-testid="testimony"
            variant="caption"
            color={theme.palette.text.secondary}
            marginTop={theme.spacing(2.5)}
            component="div"
          >
            &rdquo;{props.testimony}&rdquo;
          </Typography>
        </Grid>
      </Grid>
    </GridConatiner>
  );
};

export default TestimonialCard;
