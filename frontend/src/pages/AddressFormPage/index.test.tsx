import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddressFormPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(<BrowserRouter><AddressFormPage /></BrowserRouter>);
});

test('AddressFormPage should render', async() => {
  const TemplateElement = screen.getByTestId('template');
  expect(TemplateElement).toBeInTheDocument();

});

test('AddressFormPage for back button fireEvent', async() => {
  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[0]);
});

test('AddressFormPage for back button fireEvent', async() => {
  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[1]);
  expect(navigate).toBeCalled();
});

test('AddressFormPage for Continue button fireEvent', async() => {
  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[2]);
  expect(navigate).toBeCalled();
});

test('input',async()=>{

  const input = screen.getByLabelText('Zipcode') as HTMLInputElement;
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '12121' } });
  expect(input.value).toBe('12121');
})

