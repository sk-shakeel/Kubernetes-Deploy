import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import { useGlobalMonthDayState } from '../../components/molecules/MonthDaySelector';
import { useGlobalMonthSelector } from '../../components/molecules/MonthSelector';
import TestStepper from '../../components/molecules/Stepper';
import { useGlobalTimeState } from '../../components/molecules/TimeSelector';
import AppointmentDate from '../../components/organisms/AppointmentDate';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import { DaySelectorValues, FORMAT_DAY_TIME, StepperLabText } from '../../utils/constants';
import theme from '../../utils/theme';


const SelectAppointment = () => {
  const [dayIndex] = useGlobalMonthDayState();
  const [time] = useGlobalTimeState();
  const [month] = useGlobalMonthSelector();

  const navigate = useNavigate();
  const slot = FORMAT_DAY_TIME(DaySelectorValues[dayIndex], time,month);
  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperLabText}
          activeStep={1}
          handleBack={() => navigate(-1)}
        />
      }
      page={<AppointmentDate />}
      bottomNav={
        <BottomNav
          selectionDetail={
            <Typography variant="body1" color={theme.palette.text.primary}>
              {slot}
            </Typography>
          }
          cancelClick={() => {
            navigate('/home');
          }}
          completeClick={() => {
            navigate('/addaddress', { state: { selectedSlot: slot } });
          }}
          label={'Add Address'}
          displayCancel={true}
        />
      }
    />
  );
};

export default SelectAppointment;
