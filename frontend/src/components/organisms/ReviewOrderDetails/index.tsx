import React, { useEffect, useState } from 'react';
import { Box, Divider, Grid, styled, Typography } from '@mui/material';
import theme from '../../../utils/theme';
import {PatientDetails} from '../../molecules/PatientDetails';
import {
  cost,
  HEADING,
  labDetailsCardContent,
  PATIENT_ORDER_DETAIL,
  reportCardDetails,
  REVIEW_ORDER_CARD_DATA,
  Svg,
  timeSlotSelected,
  TIME_SLOT,
} from '../../../utils/constants';
import ReviewOrderCard from '../../molecules/ReviewOrderCard';
import ReviewOrderCardHeader from '../../molecules/ReviewOrderCardHeading';
import { useGlobalPatientIdState } from '../SelectPatientOrg';
import { PatientProps, PatientService } from '../../../services';

interface Props {
  testId: string;
}

export const PatientDetailsComponent = () => {
  const [patientId] = useGlobalPatientIdState();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const key = async () => {
      setOrder(await PatientService.getPatients());
    };
    key();
  }, [order, setOrder]);

  return (
    <Box data-testid={'reviewOrder'}>
      {order
        .filter((item:PatientProps)=>patientId.includes(item.patientId))
        .map((patient_detail:PatientProps, key) => {
          return (
            <Grid item key={key} sx={{ width: '23rem' }}>
            
              {patient_detail !== null && (
                
                <PatientDetails
                  patientName={patient_detail.name}
                  type={patient_detail.relation}
                  gender={patient_detail.gender}
                  age={patient_detail.age}
                  testName={reportCardDetails[1]}
                  cost={cost}
                  noOfTest={PATIENT_ORDER_DETAIL[0].noOfTest}
                  testid={'order'}
                />
              )}
            </Grid>
          );
        })}
    </Box>
  );
};

export const TimeSlot = () => {
  return (
    <>
      <Grid item padding={theme.spacing(4)}>
        <Typography
          variant="overline"
          color="text.primary"
          data-testid="dateid"
        >
          {TIME_SLOT[0]}
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
          {TIME_SLOT[1]}
        </Typography>
      </Grid>
    </>
  );
};

export const ReviewOrderForm = (props: Props) => {
  return (
    <OuterGrid
      container
      data-testid={props.testId}
      justifyContent={'flex-start'}
      alignItems={'center'}
      direction={'column'}
    >
      <Grid item sx={{ paddingBottom: theme.spacing(4), width: '27rem' }}>
        <ReviewOrderCard
          iconImg={Svg.altos}
          labName={labDetailsCardContent[0]}
          totalItem={REVIEW_ORDER_CARD_DATA[0]}
          discount={REVIEW_ORDER_CARD_DATA[1]}
          grandTotal={REVIEW_ORDER_CARD_DATA[2]}
          currency={'Dollar'}
        />
      </Grid>
      <Grid item>
        <ReviewOrderCardHeader
          heading={HEADING}
          status={false}
          icon={Svg.user1}
          component={<PatientDetailsComponent />}
        />
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(5) }}>
        <ReviewOrderCardHeader
          heading={timeSlotSelected}
          status={true}
          icon={Svg.calendar}
          component={<TimeSlot />}
        />
      </Grid>
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  width: '583px',
  minHeight: '700px',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(6),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  boxShadow: 'rgb(233 232 237 / 50%) 0px 0px 26px',
});
