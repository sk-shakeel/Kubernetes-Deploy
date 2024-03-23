import { render, screen } from '@testing-library/react';
import TestInfoOne from '.';
import React from 'react';

test('render TestInfoOne', () => {

  render(<TestInfoOne variant={'subtitle2'} color={'text.primary'} />);
    const test = screen.getByRole("info")
  expect(test).toBeInTheDocument();
  expect(test).toHaveTextContent("To check if you have an active COVID-19 infection")
});