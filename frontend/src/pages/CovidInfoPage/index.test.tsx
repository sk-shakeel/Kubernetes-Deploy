import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CovidInfoPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render covid info page', async() => {
  render(
    <BrowserRouter>
      <CovidInfoPage />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('covidinfo')).toBeInTheDocument();
  expect(screen.getByText('Starting from $1200')).toBeInTheDocument();
  expect(screen.getByText('Reports ready in 24 Hours')).toBeInTheDocument();

  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);

  const addPatientButton = screen.getByText('Add Patient');
  fireEvent.click(addPatientButton);

  expect(navigate).toBeCalled();
});
