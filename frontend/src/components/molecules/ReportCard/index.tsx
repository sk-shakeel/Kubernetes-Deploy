/**
 * @author Arifa Shaik <shaik.arifa@zemosolabs.com>
 */

import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { reportCardDetails, reportSvgPdf, Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

export interface ReportCardProps {
  status: 'pending' | 'completed';
  labName: string;
  testName: string;
  date: string;
  time: string;
  testId?:string;
}

export const ReportCard = (props: ReportCardProps) => {
  const Completed = () => {
    return (
      <>
        <Grid item data-testid={props.testId}>
          <Typography
            variant={'subtitle2'}
            color={'text.disabled'}
            paddingTop={theme.spacing(0.5)}
            letterSpacing={theme.spacing(0.1)}
          >
            {`${props.date} | ${props.time}`}
          </Typography>
        </Grid>
      </>
    );
  };

  return (
    <OuterGrid container justifyContent={'flex-start'} data-testid={props.testId}>
      <IconGrid item xs={2}>
        <Icons
          icon={reportSvgPdf(props.status)}
          width={'40rem'}
          height={'40rem'}
        />
      </IconGrid>
      <TextGrid item xs={9.2}>
        <Typography variant={'h4'} color="text.secondary">{props.labName}</Typography>
        <Typography variant={'caption'} color="text.primary">{props.testName}</Typography>
        <Grid container spacing={1}>
          {props.status === 'pending' ? <Pending /> : <Completed />}
        </Grid>
      </TextGrid>
      {props.status === 'completed' && (
        <DownloadGrid item xs={0.8}>
          <Icons icon={Svg.download} width={'22rem'} height={'22rem'} />
        </DownloadGrid>
      )}
    </OuterGrid>
  );
};

const Pending = () => {
  return (
    <>
      <Grid item sx={{marginTop:'4px'}}>
        <Icons icon={Svg.RedClock} width={'13rem'} height={'13rem'} />
      </Grid>
      <Grid item>
        <Typography
          variant={'caption'}
          color={'error.main'}
          position={'relative'}
          top={theme.spacing(0.5)}
        >
          {reportCardDetails[2]}
        </Typography>
      </Grid>
    </>
  );
};

const OuterGrid = styled(Grid)({
  maxWidth: '583px',
  width: '100%',
  background: theme.palette.grey[800],
  minHeight: '88px',
  height: '100%',
  border: '0.5px solid #F6F5F7',
  boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
  borderRadius: theme.spacing(2),
});
const IconGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  filled: 'red',
});

const TextGrid = styled(Grid)({
  paddingTop: theme.spacing(1.5),
});

const DownloadGrid = styled(Grid)({
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(4.2),
  cursor: 'pointer',
});
