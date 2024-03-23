
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AccountPage from '.';
import * as router from 'react-router';
const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(
      <BrowserRouter>
        <AccountPage />
      </BrowserRouter>,
  );
});

test('AccountPage should render', async() => {
  const TemplateElement = screen.getByTestId('account-modal');
  expect(TemplateElement).toBeInTheDocument();
});

test('AccountPage should render logout', async() => {
  const IconElements = screen.getAllByTestId('icon');
  fireEvent.click(IconElements[0]);
});