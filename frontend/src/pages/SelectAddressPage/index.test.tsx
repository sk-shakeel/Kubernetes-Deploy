import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SelectAddressPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

test('SelectAddressPage should render', async() => {
  render(
    <BrowserRouter>
      <SelectAddressPage />
    </BrowserRouter>,
  );

  const TemplateElement = screen.getByTestId('template');
  expect(TemplateElement).toBeInTheDocument();
});

test('SelectAddressPage for back button fireEvent', async() => {
  render(
    <BrowserRouter>
      <SelectAddressPage />
    </BrowserRouter>,
  );

  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[0]);
});

test('SelectAddressPage for Add adress button fireEvent', async() => {
  render(
    <BrowserRouter>
      <SelectAddressPage />
    </BrowserRouter>,
  );

  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[1]);
  expect(navigate).toBeCalled();
});

test('SelectAddressPage for back button fireEvent', async() => {
  render(
    <BrowserRouter>
      <SelectAddressPage />
    </BrowserRouter>,
  );

  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[2]);
  expect(navigate).toBeCalled();
});

test('SelectAddressPage for Continue button fireEvent', async() => {
  render(
    <BrowserRouter>
      <SelectAddressPage />
    </BrowserRouter>,
  );

  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[3]);
  expect(navigate).toBeCalled();
});
