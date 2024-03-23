import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCard from '.';

test('should render credit card', () => {
  render(
    <CreditCard cardHolder={'Jack'} cardNumber={'12345'} expiry={'03/09'} />,
  );

  const creditcard = screen.getByTestId('icon');
  const img = screen.getByTestId('icon');

  const cardHolder = screen.getByText('Jack');
  const cardExpiry = screen.getByText('03/09');
  const cardNumber = screen.getByText('1234 5');

  expect(creditcard).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(cardHolder).toBeInTheDocument();
  expect(cardExpiry).toBeInTheDocument();
  expect(cardNumber).toBeInTheDocument();
});
