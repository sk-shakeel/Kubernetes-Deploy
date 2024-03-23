import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CheckoutPage from '.';

import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render checkout page', async() => {
  render(
    <BrowserRouter>
      <CheckoutPage />
    </BrowserRouter>,
  );

  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);

  const addPatientButton = screen.getByText('Pay Now');
  fireEvent.click(addPatientButton);

  expect(navigate).toBeCalled();
});
