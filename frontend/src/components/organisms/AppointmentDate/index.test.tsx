import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import AppointmentDate from '.';

test('should render Appointment date', async() => {
  render(<AppointmentDate />);

  const button = screen.getAllByTestId('timechips');
  expect(button.length).toBe(9);

  const buttonElements = screen.getAllByTestId('chips');
  expect(buttonElements.length).toBe(31);

  const Day4Element = screen.getByTestId('chip-4');
  fireEvent.click(Day4Element);
  const Day4FiredElement = screen.getByTestId('chip-4');
  expect(Day4FiredElement.style.backgroundColor).toBe('rgb(158, 98, 178)');
});
