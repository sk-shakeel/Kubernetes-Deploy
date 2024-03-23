import { render, screen } from '@testing-library/react';
import React from 'react';
import TrackYouOrder from '.';
import { Svg } from '../../../utils/constants';

test('should render stepper', async() => {
  const trackOfEvents = [
    {
      eventName: 'Order placed',
      icon: Svg.check,
      tagline: 'Placed on Mon, 22 Feb, 11.00 AM',
    },
    {
      eventName: 'Lab technician assigned',
      icon: Svg.labtechnician,
      tagline: 'Esther Howard',
    },
    {
      eventName: 'Sample collection',
      icon: Svg.pickup,
      tagline: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
    },
    {
      eventName: 'Sample being examined',
      icon: Svg.testconducted,
      tagline: 'Estimated time - 24 hrs',
    },
    {
      eventName: 'Report ready',
      icon: Svg.filetext,
      tagline: '',
    },
  ];
  const activeStep = 1;

  render(
    <TrackYouOrder trackOfEvents={trackOfEvents} activeStep={activeStep} />,
  );

  expect(screen.getByTestId('stepper')).toBeInTheDocument();
  expect(screen.getByText('Order placed')).toBeInTheDocument();
  expect(screen.getByText('Lab technician assigned')).toBeInTheDocument();
});
