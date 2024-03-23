import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ReviewOrderPage from '.';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

it('should render covid info page', async() => {
  render(
    <BrowserRouter>
      <ReviewOrderPage />
    </BrowserRouter>,
  );
  const reviewOrder = screen.getAllByTestId('reviewOrder');
  expect(reviewOrder).toHaveLength(2);

  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);

  const addPatientButton = screen.getByText('Continue');
  fireEvent.click(addPatientButton);

  expect(navigate).toBeCalled();
});
