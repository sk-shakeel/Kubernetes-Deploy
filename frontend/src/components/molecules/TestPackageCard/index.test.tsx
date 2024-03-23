import { render, screen } from '@testing-library/react';
import React from 'react';
import TestPackageCard from '.';
import { Svg } from '../../../utils/constants';

test('should render test package card', () => {
  render(
    <TestPackageCard
      testid="bodytest"
      image={Svg.bodytest}
      testpackage={'Full body checkup'}
      cost={1299}
      report_time={24}
      noOfTest={24}
    />,
  );

  const bodyTest = screen.getByTestId('bodytest');
  const packages = screen.getByText('Full body checkup');
  const cost = screen.getByText('Starting from $1299');
  const report = screen.getByText('Reports ready in 24 Hours');
  const tests = screen.getByText('24 tests');
  const viewDetails = screen.getByText('View Details');

  expect(bodyTest).toBeInTheDocument();
  expect(packages).toBeInTheDocument();
  expect(cost).toBeInTheDocument();
  expect(report).toBeInTheDocument();
  expect(tests).toBeInTheDocument();
  expect(viewDetails).toBeInTheDocument();
});
