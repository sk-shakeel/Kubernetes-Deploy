import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Chip from '.';

test('should render chip', () => {
  const handleClick = jest.fn();
  render(<Chip text={'March'} onclick={handleClick} testid={'chip'} />);
  const chip = screen.getByTestId('chip');
  fireEvent.click(chip);

  const text = screen.getByText('March');

  expect(handleClick).toBeCalled();
  expect(chip).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
