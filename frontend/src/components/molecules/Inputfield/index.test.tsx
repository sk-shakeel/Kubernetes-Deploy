import { fireEvent, render, screen } from '@testing-library/react';
import InputField from '.';
import React from 'react';

test('render InputField', () => {
  render(
    <InputField
      label={'First Name'}
      placeholder={'eg: Patrick'}
      onChange={(e) => console.log(e)}
      testid={'inputfield'}
    />,
  );

  const textfield = screen.getByTestId('inputfield');
  expect(textfield).toBeInTheDocument();

  const placeholder = screen.getByPlaceholderText('eg: Patrick');
  expect(placeholder).toBeInTheDocument();

  const input = screen.getByLabelText('First Name') as HTMLInputElement;
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'Patrick' } });
  expect(input.value).toBe('Patrick');
});
