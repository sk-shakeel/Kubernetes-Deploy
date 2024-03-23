import { render, screen } from '@testing-library/react';
import React from 'react';
import { ListOfServices } from '.';

it('list of service cards should render', async() => {
  render(<ListOfServices />);

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(6);

  const testId = screen.getAllByTestId('serviceCard');
  expect(testId).toHaveLength(6);
});
