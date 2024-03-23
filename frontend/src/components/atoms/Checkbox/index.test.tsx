import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '.';
import React from 'react';

test('render Checkbox', () => {
  const handleClick = jest.fn();

  render(<Checkbox onClick={handleClick} color="secondary" />);
  const checkboxElement = screen.getByRole('checkboxbtn');

  fireEvent.click(checkboxElement);
  expect(handleClick).toBeCalled();

  expect(checkboxElement).toBeInTheDocument();
});
