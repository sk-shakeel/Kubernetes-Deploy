import { render, screen } from '@testing-library/react';
import React from 'react';
import TimeSelector from '.';
import { TimeSelectorValues } from '../../../utils/constants';

it('Time Selector shoud render', () => {
  render(
    <TimeSelector
      timeValues={TimeSelectorValues[0]}
      timeHeader={'6Am - 12AM'}
    />,
  );
  const buttonElements = screen.getAllByTestId('timechips');
  expect(buttonElements.length).toBe(5);
});
