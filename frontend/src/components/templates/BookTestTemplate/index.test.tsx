import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import BookTestTemplate from '.';
import { AddressCardOrg } from '../../organisms/AddressCardOrg';
import { LIST_OF_ADDRESSES, StepperLabText } from '../../../utils/constants';
import BottomNav from '../../molecules/BottomNav';
import TestStepper from '../../molecules/Stepper';

test('render TestStepper', () => {

  const handleBack = jest.fn();

  render(
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperLabText}
          activeStep={3}
          handleBack={handleBack}
        />
      }
      page={<AddressCardOrg  />}
      bottomNav={<BottomNav label={'Complete Order'} displayCancel={true} />}
    />,
  );

  const mainTemp = screen.getByTestId("template");
  expect(mainTemp).toBeInTheDocument();

  const logo = screen.getByTestId("logoid");
  expect(logo).toBeInTheDocument();

  const stepper = screen.getByTestId("stepperid");
  expect(stepper).toBeInTheDocument();

  const organism = screen.getByTestId("organismid");
  expect(organism).toBeInTheDocument();

  const bottomnav = screen.getByTestId("bottomnav");
  expect(bottomnav).toBeInTheDocument();

});
