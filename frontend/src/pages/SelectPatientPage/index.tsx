import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import TestStepper from '../../components/molecules/Stepper';
import {
  SelectPatientsOrg,
  useGlobalPatientIdState,
} from '../../components/organisms/SelectPatientOrg';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import { COUNT_FORMATTER, StepperHomeText } from '../../utils/constants';

export const SelectPatientPage = () => {
  const navigate = useNavigate();
  const [count] = useGlobalPatientIdState();

  const Singular = () => {
    return (
      <Typography variant="body1">{COUNT_FORMATTER(count.length)}</Typography>
    );
  };
  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperHomeText.slice(0, 3)}
          activeStep={2}
          handleBack={() => navigate(-1)}
        />
      }
      page={<SelectPatientsOrg testId="selectPatient" />}
      bottomNav={
        <BottomNav
          cancelClick={() => {
            navigate('/home');
          }}
          completeClick={() => {
            navigate('/selectlab');
          }}
          label={'Select Lab'}
          displayCancel={true}
          selectionDetail={<Singular />}
        />
      }
    />
  );
};
