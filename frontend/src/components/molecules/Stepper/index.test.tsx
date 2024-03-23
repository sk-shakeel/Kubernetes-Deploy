import { fireEvent, render, screen } from '@testing-library/react';
import TestStepper from '.';
import React from 'react';
import { StepperLabText } from '../../../utils/constants';

test('render TestStepper', () => {
  const handleBack = jest.fn();
  render(
    <TestStepper
      testid="horizontalStepperid"
      steps={StepperLabText}
      activeStep={2}
      handleBack={handleBack}
    />,
  );

  const getItem = screen.getByTestId('horizontalStepperid');
  expect(getItem).toBeInTheDocument();

  const step = screen.getByTestId('stepper');
  expect(step).toHaveTextContent('Lab test');

  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(handleBack).toBeCalled();
});

test('render TestStepper', () => {
  const handleBack = jest.fn();
  render(
    <TestStepper
      stepper={false}
      heading={'Checkout'}
      handleBack={handleBack}
    />,
  );

  const getItem = screen.getByTestId('horizontalStepperid');
  expect(getItem).toBeInTheDocument();

  const step = screen.getByText('Checkout');
  expect(step).toBeInTheDocument();

  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(handleBack).toBeCalled();
});
