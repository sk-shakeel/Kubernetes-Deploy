import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReportsPage from '.';

it('ReportsPage render', () => {
  render(
    <BrowserRouter>
      <ReportsPage />
    </BrowserRouter>,
  );

  const text = screen.getByText('Pending');
  expect(text).toBeInTheDocument();

  for (let i = 0; i < 3; i++) {
    const card = screen.getByTestId(`reportcard-${i}`);
    expect(card).toBeInTheDocument();
  }

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(13);
});
