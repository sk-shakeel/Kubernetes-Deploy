import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import TestStepper from '../../components/molecules/Stepper';
import CovidInfo from '../../components/organisms/CovidInfo';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import { cost, features, packageBenifits, packagePoints, reportTime, StepperHomeText } from '../../utils/constants';


const CovidInfoPage = () => {
  const navigate = useNavigate();
  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperHomeText.slice(0, 2)}
          activeStep={1}
          handleBack={() => navigate(-1)}
        />
      }
      page={
        <CovidInfo
          features={features}
          packageBenifits={packageBenifits}
          cost={cost}
          reportTime={reportTime}
          packagePoints={packagePoints}
        />
      }
      bottomNav={
        <BottomNav
          cancelClick={() => {
            navigate('/home');
          }}
          completeClick={() => {
            navigate('/addpatients');
          }}
          label={'Add Patient'}
          displayCancel={true}
        />
      }
    />
  );
};

export default CovidInfoPage;
