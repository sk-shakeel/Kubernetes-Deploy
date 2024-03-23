import React, { useState } from 'react';
import { StepperLabText } from '../../utils/constants';
import TestStepper from '../../components/molecules/Stepper/index';
import BookTestTemplate from '../../components/templates/BookTestTemplate/index';
import { AddressForm } from '../../components/organisms/AddAddressForm/index';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import { AddressService, loggedUser } from '../../services';


function AddressFormPage() {
  const navigate = useNavigate();
  const [house, setHouse] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleFormDetails = (key: number, value: string) => {
    {key===0 && setHouse(value) || key===1 && setArea(value)|| key===2 && setZip(value)||key===3 && setCity(value)}
  };

 const handleAddressSubmit = () => {
    const address = {
      id: 1,
      userId: loggedUser,
      houseNo: house,
      area: area,
      zipcode: zip,
      city: city,
    };
    {address.zipcode!=='' && AddressService.postAddress(address)}
  };

  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperLabText}
          activeStep={2}
          handleBack={() => {
            history.back();
          }}
        />
      }
      page={
        <AddressForm
          handleChange={(
            key: number,
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => {
            handleFormDetails(key, e.target.value);
          }}
        />
      }
      bottomNav={
        <BottomNav
          label={'Save Address'}
          displayCancel={true}
          completeClick={() => {handleAddressSubmit() ;navigate('/selectaddress')}}
          cancelClick={() => navigate('/home')}
        />
      }
    />
  );
}

export default AddressFormPage;
