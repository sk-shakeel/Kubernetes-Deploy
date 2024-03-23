import { screen, render } from '@testing-library/react';
import React from 'react';
import CheckoutPaymentOptions from '.';

test('should render payment card and options', async() => {
  render(<CheckoutPaymentOptions />);
  const creditcard = screen.getByTestId('creditcard');
  const img = screen.getAllByTestId('icon');

  const cardHolder = screen.getByText('Jack');
  const cardExpiry = screen.getByText('03/09');
  const cardNumber = screen.getByText('1234 5');

  expect(screen.getByTestId('paymentoptions')).toBeInTheDocument();
  expect(screen.getByText('Pay Pal')).toBeInTheDocument();
  expect(screen.getByText('Google Pay')).toBeInTheDocument();
  expect(screen.getByText('Net Banking')).toBeInTheDocument();

  expect(creditcard).toBeInTheDocument();
  expect(img).toHaveLength(5);
  expect(cardHolder).toBeInTheDocument();
  expect(cardExpiry).toBeInTheDocument();
  expect(cardNumber).toBeInTheDocument();
});
