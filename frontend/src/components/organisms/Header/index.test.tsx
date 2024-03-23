import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '.';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('render Header', async() => {
  const handleClick = jest.fn();

  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();

  const navItems = screen.getByTestId('navitems');
  expect(navItems).toBeInTheDocument();

  const navItem1 = screen.getByText('Reports');
  fireEvent.click(navItem1);
  expect(handleClick).toBeCalledTimes(0);

  const navItem2 = screen.getByText('Home');
  fireEvent.click(navItem2);
  expect(handleClick).toBeCalledTimes(0);

  const navItem3 = screen.getByText('My Appointments');
  fireEvent.click(navItem3);
  expect(handleClick).toBeCalledTimes(0);
});
