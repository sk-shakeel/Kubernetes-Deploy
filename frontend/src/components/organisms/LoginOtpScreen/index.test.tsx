import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import LoginOtpScreen from '.';

test('should render otp screen', async() => {
  render(<LoginOtpScreen />);

  const Otp0 = screen.getByTestId('otpitem-0');
  const Otp1 = screen.getByTestId('otpitem-1');
  const Otp2 = screen.getByTestId('otpitem-2');
  const Otp3 = screen.getByTestId('otpitem-3');

  fireEvent.change(Otp0, { target: { value: '1' } });
  fireEvent.change(Otp1, { target: { value: '1' } });
  fireEvent.change(Otp2, { target: { value: '1' } });
  fireEvent.change(Otp3, { target: { value: '1' } });

  expect(screen.getByTestId('otpcontainer')).toBeInTheDocument();
  expect(screen.getByText('OTP')).toBeInTheDocument();
});
