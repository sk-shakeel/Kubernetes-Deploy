import { render, screen } from '@testing-library/react';
import React from 'react';
import { SignupOptions } from './index';

it('icons should render', () => {
  render(<SignupOptions />);
  const text = screen.getByText('or sign up with');
  expect(text).toBeVisible();

  const icons = screen.getAllByTestId('icon')[0] as HTMLOrSVGElement;
  expect(icons).toBeInTheDocument();
});
