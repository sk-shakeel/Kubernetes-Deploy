import * as React from 'react';
import { render, screen } from '@testing-library/react';
import OrderPlaced from '.';

test('should render orderplaced container', () => {
  render(<OrderPlaced />);

  const container = screen.getByTestId('orderContainer');
  const heading = screen.getByTestId('heading');
  const instructions = screen.getByTestId('instructions');
  const comment = screen.getByTestId('comment');

  expect(comment).toBeInTheDocument();
  expect(container).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(instructions).toBeInTheDocument();
});
