import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TrackOrderPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render trackOrder Page', () => {
  render(
    <BrowserRouter>
      <TrackOrderPage />
    </BrowserRouter>,
  );

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(10);

  const heading = screen.getByText('Instructions');
  expect(heading).toBeInTheDocument();

  const instructionBar = screen.getAllByTestId('icon')[0];
  expect(instructionBar).toBeInTheDocument();
  fireEvent.click(instructionBar);

  const addPatientButton = screen.getByText('Back to Home');
  fireEvent.click(addPatientButton);

  expect(navigate).toBeCalled();
});
