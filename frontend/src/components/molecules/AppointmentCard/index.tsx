/**
 * @author Arifa Shaik <shaik.arifa@zemosolabs.com>
 */

import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import theme from '../../../utils/theme';
import { Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

interface Props {
  icon: Svg;
  testName: string;
  labName: string;
  patientName: string;
  appointmentDate: string;
}
export const AppointmentCard = (props: Props) => {
  return (
    <OuterGrid container>
      <IconGrid item xs={1.5}>
        <Icons icon={props.icon} width={'50rem'} height={'50rem'} />
      </IconGrid>
      <TextGrid item xs={8} display={'grid'}>
        <Grid container alignItems={'space-around'}>
          <Grid item sx={{ position: 'relative', bottom: '0.5vh' }}>
            <Grid item display={'flex'}>
              <Typography variant={'h3'}>{props.testName}</Typography>
              <Typography variant={'caption'}>{props.labName}</Typography>
            </Grid>
            <Typography variant={'caption'} color={'text.secondary'}>
              {props.patientName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'caption'} color={'text.secondary'}>
              {props.appointmentDate}
            </Typography>
          </Grid>
        </Grid>
      </TextGrid>
      <DownloadGrid
        item
        xs={2}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
        marginBottom={'1rem'}
      >
        <Icons icon={Svg.share} width={'22rem'} height={'22rem'} />
        <Icons icon={Svg.download} width={'22rem'} height={'22rem'} />
      </DownloadGrid>
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  maxWidth: '583px',
  width: '100%',
  background: theme.palette.grey[800],
  minHeight: '88px',
  height: '100%',
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
  borderRadius: '8px',
});
const IconGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
});

const TextGrid = styled(Grid)({
  paddingTop: theme.spacing(3.6),
});

const DownloadGrid = styled(Grid)({
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(4.2),
  cursor: 'pointer',
});
