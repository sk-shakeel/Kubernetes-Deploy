import { screen, render } from '@testing-library/react';
import React from 'react';
import { AppointmentCard } from '.';
import { appointmentDetails, Svg } from '../../../utils/constants';

it('appointment card should render', () => {
  render(
    <AppointmentCard
      icon={Svg.covid}
      labName={appointmentDetails[1]}
      patientName={appointmentDetails[2]}
      testName={appointmentDetails[0]}
      appointmentDate={appointmentDetails[3]}
    />,
  );

  const icon = screen.getAllByTestId('icon');
  expect(icon).toHaveLength(3);

  const labName = screen.getByText(appointmentDetails[1]);
  expect(labName).toBeInTheDocument();

  const patientName = screen.getByText(appointmentDetails[2]);
  expect(patientName).toBeInTheDocument();

  const testName = screen.getByText(appointmentDetails[0]);
  expect(testName).toBeInTheDocument();

  const appointmentDate = screen.getByText(appointmentDetails[3]);
  expect(appointmentDate).toBeInTheDocument();
});
