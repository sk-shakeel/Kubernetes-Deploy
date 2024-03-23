import { render, screen } from '@testing-library/react';
import React from 'react';
import { ReportCard } from '.';
import { reportCardDetails } from '../../../utils/constants';

it('pending report card should render', () => {
  render(
    <ReportCard
      status={'pending'}
      labName={reportCardDetails[0]}
      testName={reportCardDetails[1]}
      date={reportCardDetails[3]}
      time={reportCardDetails[4]}
    />,
  );

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(2);

  const text = screen.getByText('Pending');
  expect(text).toBeInTheDocument();

  const labName = screen.getByText('Los Altos Center Lab');
  expect(labName).toBeInTheDocument();

  const testName = screen.getByText('COVID RT-PCR Test');
  expect(testName).toBeInTheDocument();
});

it('completed report card should render', () => {
  render(
    <ReportCard
      status={'completed'}
      labName={reportCardDetails[0]}
      testName={reportCardDetails[1]}
      date={reportCardDetails[3]}
      time={reportCardDetails[4]}
      testId={'date'}
    />,
  );

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(2);

  const appointmentDate = screen.getAllByTestId('date');
  expect(appointmentDate).toHaveLength(2);

  const labName = screen.getByText('Los Altos Center Lab');
  expect(labName).toBeInTheDocument();

  const testName = screen.getByText('COVID RT-PCR Test');
  expect(testName).toBeInTheDocument();
});
