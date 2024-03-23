import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import { Svg, timeSlotSelected, change } from '../../../utils/constants';
import theme from '../../../utils/theme';
import Divider from '@mui/material/Divider';

interface TimeSlotCardProps {
  date: string;
  time: string;
  onClick?: () => void;
  className?: string;
}

const StyledBoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(3),
  boxSizing: 'border-box',
  width: '434px',
  height: '92px',
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const style = {
  fontSize: theme.spacing(3),
  lineHeight: theme.spacing(4.5),
  fontWeight: 500,
};

const TimeSlotCard = (props: TimeSlotCardProps) => {
  return (
    <StyledBoxContainer className={props.className}>
      <Grid
        container
        padding={theme.spacing(3)}
        justifyContent={'space-between'}
        display={'flex'}
      >
        <Grid item display={'flex'} alignItems={'center'}>
          <StyledBox>
            <Icons
              icon={Svg.calendar}
              width={theme.spacing(4)}
              height={theme.spacing(4)}
            />
            <Typography variant="overline" color="info.main">
              {timeSlotSelected}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item>
          <CustomButton
            variant="text"
            style={style}
            label={change}
            onClick={props.onClick}
          />
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={3} margin={theme.spacing(0)}>
        <Grid item padding={theme.spacing(4)}>
          <Typography
            variant="overline"
            color="text.primary"
            data-testid="dateid"
          >
            {props.date}
          </Typography>
        </Grid>
        <Grid item padding={`${theme.spacing(2)} 0 0 !important`}>
          <Divider
            sx={{ height: theme.spacing(5) }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        </Grid>
        <Grid item padding={theme.spacing(4)}>
          <Typography
            variant="overline"
            color="text.primary"
            data-testid="timeid"
          >
            {props.time}
          </Typography>
        </Grid>
      </Grid>
    </StyledBoxContainer>
  );
};

export default TimeSlotCard;
