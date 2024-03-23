import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import TestStepper from '../../components/molecules/Stepper';
import LabSelection, { useGlobalLabSelectionState } from '../../components/organisms/LabSelection';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import { StepperLabText } from '../../utils/constants';


const StyledGridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
});

const LabDetails = () => {
  const [lab] = useGlobalLabSelectionState();

  return (
    <StyledGridContainer container>
      <Grid item>
        <Typography data-testid="labname_id" variant="overline" color="text.secondary">
          {lab.labName}
        </Typography>
      </Grid>
      <Grid item display={'flex'} flexDirection={'row'}>
        <Typography variant="body1" color="text.primary">
          {"1200"}
        </Typography>
        <Typography variant="h5" color="text.disabled">
          &nbsp;for 1 Test
        </Typography>
      </Grid>
    </StyledGridContainer>
  );
};

const LabSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperLabText}
          activeStep={0}
          handleBack={() => navigate(-1)}
        />
      }
      page={<LabSelection />}
      bottomNav={
        <BottomNav
          cancelClick={() => navigate('/home')}
          selectionDetail={<LabDetails />}
          label={'Select Date & Time'}
          completeClick={() => navigate('/setdate')}
          displayCancel={true}
        />
      }
    />
  );
};

export default LabSelectionPage;
