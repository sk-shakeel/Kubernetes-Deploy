import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import VerifyOtp from '.';

test('should render verify otp component', () => {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (useState: any) => [useState, setState];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  render(
    <BrowserRouter>
      <VerifyOtp username={'Patrick'} />
    </BrowserRouter>,
  );

  const welcome = screen.getByText('Hey Patrick');
  const validation = screen.getByText('Enter the OTP to verify your details');

  const button = screen.getByText('Verify');

  const Otp0 = screen.getByTestId('otpitem-0');
  const Otp1 = screen.getByTestId('otpitem-1');
  const Otp2 = screen.getByTestId('otpitem-2');
  const Otp3 = screen.getByTestId('otpitem-3');

  fireEvent.change(Otp0, { target: { value: '1' } });
  fireEvent.change(Otp1, { target: { value: '1' } });
  fireEvent.change(Otp2, { target: { value: '1' } });
  fireEvent.change(Otp3, { target: { value: '1' } });

  fireEvent.click(button);
  expect(screen.getByTestId('otpcontainer')).toBeInTheDocument();
  expect(screen.getByText('OTP')).toBeInTheDocument();

  expect(setState).toHaveBeenCalledTimes(4);

  expect(welcome).toBeInTheDocument();
  expect(validation).toBeInTheDocument();
});
