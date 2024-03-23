import { fireEvent, render, screen } from '@testing-library/react';
import MobileNumberVerification from '.';
import React from 'react';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

it('MobileNumberVerification form render', async() => {
  render(
    <BrowserRouter>
      <MobileNumberVerification userName={'Patrick'} />,
    </BrowserRouter>,
  );
  const ContainerElement = screen.getByTestId('mobileVerificationId');
  expect(ContainerElement).toBeInTheDocument();
});

it('MobileNumberVerification Form Input Field FireEvent', async() => {
  render(
    <BrowserRouter>
      <MobileNumberVerification userName={'Patrick'} />,
    </BrowserRouter>,
  );
  const numberInput = screen.getByTestId('mobile-number-inputfield');
  expect(numberInput).toBeInTheDocument();

  const num = screen.getByLabelText('Mobile Number') as HTMLInputElement;
  fireEvent.change(num, { target: { value: '(330) 617-3324' } });
  expect(num.value).toBe('+1 (330) 617-3324');

  const btnText = screen.getByText('Get OTP');
  fireEvent.click(btnText);
  expect(navigate).toBeCalled();
});
