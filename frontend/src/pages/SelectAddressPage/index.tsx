import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import TestStepper from '../../components/molecules/Stepper';
import { AddressCardOrg } from '../../components/organisms/AddressCardOrg';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import { StepperLabText } from '../../utils/constants';

function SelectAddressPage() {
  const navigate = useNavigate();

  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperLabText}
          activeStep={2}
          handleBack={() => {history.back()}}
        />
      }
      page={<AddressCardOrg  onClick={() => navigate("/addaddress")} />}
      bottomNav={
        <BottomNav
          label={'Complete Order'}
          displayCancel={true}
          cancelClick={() => {
            navigate('/home');
          }}
          completeClick={() => {
            navigate('/revieworder');
          }}
        />
      }
    />
  );
}

export default SelectAddressPage;
