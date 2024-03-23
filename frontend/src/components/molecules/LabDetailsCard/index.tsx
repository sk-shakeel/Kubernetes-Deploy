/**
 * @author Arifa Shaik <shaik.arifa@zemosolabs.com>
 */

import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import { Icons } from '../../atoms/Icons';
import {
  labDetailsCardContent,
  LABTESTNUMBER,
  Svg,
} from '../../../utils/constants';
import theme from '../../../utils/theme';

interface Props {
  isSelected: boolean;
  onClick?: () => void;
  logo: Svg;
  labName: string;
  rating: number;
  slotsAvailable: number;
  reportDetails: string;
  amount: number;
  dataTestId?: string;
  noOfTests: number;
}

export const LabDetailsCard = (props: Props) => {
  const cardBorder = props.isSelected
    ? '2px solid #9E62B3'
    : '1px solid #E9E8ED';

  return (
    <OuterGrid
      container
      direction={'row'}
      sx={{ border: cardBorder }}
      onClick={props.onClick}
      data-testid={'labcard'}
    >
      <IconGrid item xs={1.5}>
        <Icons icon={props.logo} width={'30px'} height={'30px'} />
      </IconGrid>
      <ContentGrid item xs={9} data-testid={props.dataTestId}>
        <Grid container direction={'column'} alignItems={'space-around'}>
          <Grid item>
            <Typography variant={'body1'} color="text.secondary">{props.labName}</Typography>
          </Grid>
          <Grid item>
            <IconTextGrid container direction={'row'}>
              <StarGrid item>
                <Icons icon={Svg.star} width={'17px'} height={'17px'} />
                <Typography variant={'h3'} color="text.secondary">{props.rating}</Typography>
              </StarGrid>
              <CalendarGrid item>
                <Icons icon={Svg.calendar} width={'22px'} height={'20px'} />
                <Typography
                  variant={'h3'}
                  color={'success.main'}
                  paddingLeft={theme.spacing(1)}
                >
                  {`${props.slotsAvailable} ${labDetailsCardContent[1]}`}
                </Typography>
              </CalendarGrid>
            </IconTextGrid>
          </Grid>
          <Grid item sx={{ marginTop: theme.spacing(2) }}>
            <Typography variant={'caption'} color="text.secondary">
              {`${labDetailsCardContent[2]} ${props.reportDetails} `}
            </Typography>
          </Grid>
          <Grid item sx={{ paddingTop: theme.spacing(2.5) }}>
            <Typography variant={'h3'} color="text.primary">
              {`$${props.amount} for ${LABTESTNUMBER(props.noOfTests)}`}
            </Typography>
          </Grid>
        </Grid>
      </ContentGrid>
      {props.isSelected && (
        <TickGrid item xs={1.3}>
          <Icons icon={Svg.BlueTick} width={'20px'} height={'20px'} />
        </TickGrid>
      )}
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  maxWidth: '535px',
  width: '100%',
  minHeight: '144px',
  height: '100%',
  borderRadius: theme.spacing(2),
  background: theme.palette.grey[800],
  justifyContent: 'flex-start',
  display: 'flex',
});

const ContentGrid = styled(Grid)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
});

const IconGrid = styled(Grid)({
  paddingTop: theme.spacing(6),
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: theme.spacing(4),
});

const StarGrid = styled(Grid)({
  display: 'flex',
  width: '2.7rem',
  justifyContent: 'space-between',
});

const CalendarGrid = styled(Grid)({
  display: 'flex',
  paddingLeft: theme.spacing(0.5),
});

const TickGrid = styled(Grid)({
  justifyContent: 'flex-end',
  display: 'flex',
  paddingTop: theme.spacing(2.8),
});

const IconTextGrid = styled(Grid)({
  width: '12.5rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  display: 'flex',
  paddingTop: theme.spacing(2.5),
});
