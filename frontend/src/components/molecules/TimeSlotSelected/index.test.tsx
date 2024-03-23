import { fireEvent, render, screen } from '@testing-library/react';
import TimeSlotCard from '.';
import React from 'react';

test('render TimeSlotCard', () => {
  render(<TimeSlotCard date={'Tue, Feb 23, 2022'} time={'07.00 - 08.00 AM'} />);

  const datefield = screen.getByTestId('dateid');
  expect(datefield).toBeInTheDocument();

  const timefield = screen.getByTestId('timeid');
  expect(timefield).toBeInTheDocument();

  const btn = screen.getByRole("button")
  fireEvent.click(btn);
});
