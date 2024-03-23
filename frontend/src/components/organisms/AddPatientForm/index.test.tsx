import { fireEvent, render, screen } from '@testing-library/react';
import AddPatientForm from '.';
import React from 'react';

test('Patient Form should render', async() => {
  render(<AddPatientForm />);
  const formElement = screen.getByTestId('patientform-container');
  expect(formElement).toBeInTheDocument();
});

test('Patient Form Chip should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formChipElement = screen.getAllByTestId('pt-form-chips');
  expect(formChipElement.length).toBe(6);

  fireEvent.click(formChipElement[4]);
  const formChipFiredElement = screen.getAllByTestId('pt-form-chips');
  expect(formChipFiredElement[4].style.backgroundColor).toBe(
    'rgb(158, 98, 179)',
  );
});

test('Patient Form Radio should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formRadioElement = screen.getAllByRole('radio');
  expect(formRadioElement.length).toBe(3);

  fireEvent.click(formRadioElement[0]);
  const formChipFiredElement = screen.getAllByRole('radio');
  // expect(formChipFiredElement[4].isCh).toBe("v hs")
});

test('Patient Form Name input should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formNameElement = screen.getByPlaceholderText('eg: Patrick Smith');

  fireEvent.change(formNameElement, { target: { value: 'Sai' } });
});

test('Patient Form Date input should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formNameElement = screen.getByPlaceholderText('mm/dd/yyyy');

  fireEvent.change(formNameElement, { target: { value: '10/10/2000' } });
});

test('Patient Form CheckBox should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formCheckBoxElement = screen.getByRole('checkbox');

  fireEvent.click(formCheckBoxElement);
});
