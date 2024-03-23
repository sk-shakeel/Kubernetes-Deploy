import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import OTPVerificationPage from '.';
import * as router from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});
test('should render Otp verification page', async() => {
  const setState = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setState];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<OTPVerificationPage username={'Pattric'} />}
        />
      </Routes>
    </BrowserRouter>,
  );

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

  expect(setState).toHaveBeenCalledTimes(4);
});
