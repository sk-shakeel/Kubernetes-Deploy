import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '.';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('should render home page', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('homePage')).toBeInTheDocument();

  const card = screen.getByText('Covid RTPCR');
  expect(card).toBeInTheDocument();

  fireEvent.click(card);
  
  expect(window.location.pathname).toBe('/');

});
