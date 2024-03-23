import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SelectPatientsOrg } from '.';
import { PATIENT_DETAILS } from '../../../utils/constants';

it('Address card organism should render', async () => {
  render(
    <BrowserRouter>
      <SelectPatientsOrg ListOfPatients={PATIENT_DETAILS} testId={'patients'} />
    </BrowserRouter>,
  );

  const button = screen.getAllByRole('button');
  expect(button).toHaveLength(1);
  fireEvent.click(button[0]);

  const testId = screen.getAllByTestId('patients');
  expect(testId).toHaveLength(2);
});
