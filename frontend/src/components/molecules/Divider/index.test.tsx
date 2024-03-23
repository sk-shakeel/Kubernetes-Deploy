import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DividerVertical from '.';

test('divider component', () => {
  render(<DividerVertical />);
  expect(screen.getByTestId('divider')).toBeInTheDocument();
});
