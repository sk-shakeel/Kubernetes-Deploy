import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SelectAppointment from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render Appointment Page', async() => {
  render(<SelectAppointment />);

  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);

  const addAddress = screen.getByText('Add Address');
  fireEvent.click(addAddress);

  expect(navigate).toBeCalled();

  const button = screen.getAllByTestId('timechips');
  expect(button.length).toBe(9);

  const buttonElements = screen.getAllByTestId('chips');
  expect(buttonElements.length).toBe(31);

  const Day4Element = screen.getByTestId('chip-4');
  fireEvent.click(Day4Element);
  const Day4FiredElement = screen.getByTestId('chip-4');
  expect(Day4FiredElement.style.backgroundColor).toBe('rgb(158, 98, 178)');
});
