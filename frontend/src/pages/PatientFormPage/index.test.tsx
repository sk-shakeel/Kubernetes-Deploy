import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PatientFormPage from '.';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  render(<BrowserRouter>
    <PatientFormPage />
  </BrowserRouter>);
});

test('PatientFormPage should render', () => {
  const TemplateElement = screen.getByTestId('template');
  expect(TemplateElement).toBeInTheDocument();

});

test('PatientFormPage for back button fireEvent', () => {
  const ButtonElements = screen.getByText('Back');
  fireEvent.click(ButtonElements);

});

test('PatientFormPage for cancel button fireEvent', () => {
  const ButtonElements = screen.getAllByRole('button');
  fireEvent.click(ButtonElements[2]);

});

test('PatientFormPage for Continue button fireEvent', () => {
  const ButtonElements = screen.getByText('Next');
  fireEvent.click(ButtonElements);
});

