import { render, screen } from '@testing-library/react';
import React from 'react';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppointmentPage } from '.';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render Appointments page', async() => {
  render(
    <BrowserRouter>
      <AppointmentPage />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('appointmentPage')).toBeInTheDocument();
});
