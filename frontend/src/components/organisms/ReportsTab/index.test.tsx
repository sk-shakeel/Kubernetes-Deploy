import { render, screen } from '@testing-library/react';
import React from 'react';
import ReportsTab from '.';

it('All report card should render', () => {
  render(<ReportsTab />);

  for (let i = 0; i < 3; i++) {
    const card = screen.getByTestId(`reportcard-${i}`);
    expect(card).toBeInTheDocument();
  }

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(8);

  const text = screen.getByText('Pending');
  expect(text).toBeInTheDocument();
});
