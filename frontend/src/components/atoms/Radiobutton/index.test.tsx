import React from 'react';
import {render, screen } from '@testing-library/react';
import RadioButton from './index';

it('renders a radio button', () => {
  render(<RadioButton isChecked={true}></RadioButton>);
  const element = screen.getByTestId('RadioButton');
  expect(element).toBeInTheDocument();
});