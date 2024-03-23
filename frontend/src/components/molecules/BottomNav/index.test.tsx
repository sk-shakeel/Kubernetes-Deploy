import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BottomNav from '.';

it('BottomNav shoud render', () => {
  render(
    <BrowserRouter>
      <BottomNav label={'Complete Order'} displayCancel={true} />
    </BrowserRouter>,
  );
  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements.length).toBe(2);

  const btn = screen.getByTestId('cancelbtn');
  expect(btn).toBeInTheDocument();

  const container = screen.getByTestId('container');
  expect(container).toBeInTheDocument();
});
