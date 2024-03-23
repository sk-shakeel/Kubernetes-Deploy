import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import OrderPlacedPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('render OrderPlacedPage', async() => {
  render(
    <BrowserRouter>
      <OrderPlacedPage />
    </BrowserRouter>,
  );

  const mainTemp = screen.getByTestId('orderplacedpageid');
  expect(mainTemp).toBeInTheDocument();

  const backButton = screen.getByText('Back to Home');
  fireEvent.click(backButton);

  const trackOrderButton = screen.getByText('Track Your Order');
  fireEvent.click(trackOrderButton);

  expect(navigate).toBeCalled();
});
