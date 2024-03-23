import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {CustomButton} from '.';

it('should render button', () => {
  render(<CustomButton label={'Button'} />);
  const button = screen.getByRole('button');
  const text = screen.getByText('Button');
  expect(button).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  fireEvent.click(button);
});
