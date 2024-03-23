import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {SelectPatientPage} from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render covid info page', async() => {
  render(
    <BrowserRouter>
      <SelectPatientPage />
    </BrowserRouter>,
  );

  expect(screen.getAllByTestId('selectPatient')).toHaveLength(2);

  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);

  const addPatientButton = screen.getByText('Select Lab');
  fireEvent.click(addPatientButton);

  expect(navigate).toBeCalled();
});
