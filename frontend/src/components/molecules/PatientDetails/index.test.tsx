import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {PatientDetails} from '.';

test('should render patient details', () => {
  render(
    <PatientDetails
      patientName={'patt'}
      type={'self'}
      gender={'M'}
      age={20}
      testName={'covid'}
      cost={1200}
      noOfTest={1}
      testid={'patient'}
    />,
  );

  expect(screen.getByTestId('patient')).toBeInTheDocument();
  expect(screen.getByText('patt')).toBeInTheDocument();
  expect(screen.getByText('self')).toBeInTheDocument();
  expect(screen.getByText('M')).toBeInTheDocument();
  expect(screen.getByText('covid')).toBeInTheDocument();
  expect(screen.getByText('$1200')).toBeInTheDocument();
  expect(screen.getByText('20')).toBeInTheDocument();
});
