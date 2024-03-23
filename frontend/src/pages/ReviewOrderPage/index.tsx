import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import TestStepper from '../../components/molecules/Stepper';
import { ReviewOrderForm } from '../../components/organisms/ReviewOrderDetails';
import { BookTest } from '../../components/templates/BookTestTemplate/index.stories';
import { StepperLabText } from '../../utils/constants';

const ReviewOrderPage = () => {
  const navigate = useNavigate();
  return (
    <BookTest
      stepper={
        <TestStepper
          steps={StepperLabText.slice(0, 4)}
          activeStep={3}
          handleBack={() => navigate(-1)}
        />
      }
      page={<ReviewOrderForm testId={'reviewOrder'} />}
      bottomNav={
        <BottomNav
          label={'Continue'}
          displayCancel={true}
          cancelClick={() => {
            navigate('/home');
          }}
          completeClick={() => navigate('/checkout')}
        />
      }
    />
  );
};

export default ReviewOrderPage;
