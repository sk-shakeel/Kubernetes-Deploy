import { render, screen } from '@testing-library/react';
import Searchbar from '.';
import React from 'react';

test('render Searchbar', () => {
  render(<Searchbar />);
  const placeholder = screen.getByPlaceholderText(
    'Search for lab test, packages',
  );

  const search = screen.getByTestId('textfield');
  const searchicon = screen.getByRole('searchicon');
  expect(placeholder).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(searchicon).toBeInTheDocument();
});
