import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MobileNumberVerificationPage from '.';

it('MobileNumberVerificationPage form render', () => {
  render(
    <BrowserRouter>
      <MobileNumberVerificationPage />
    </BrowserRouter>,
  );
  const ContainerElement = screen.getByTestId('mobileVerificationId');
  expect(ContainerElement).toBeInTheDocument();
});

it('MobileNumberVerificationPage Form Input Field FireEvent', async() => {
  render(
    <BrowserRouter>
      <MobileNumberVerificationPage />,
    </BrowserRouter>,
  );
  const numberInput = screen.getByTestId('mobile-number-inputfield');
  expect(numberInput).toBeInTheDocument();

  const num = screen.getByLabelText('Mobile Number') as HTMLInputElement;
  fireEvent.change(num, { target: { value: '(330) 617-3324' } });
  expect(num.value).toBe('+1 (330) 617-3324');

  const btnText = screen.getByText('Get OTP');
  fireEvent.click(btnText);
});
