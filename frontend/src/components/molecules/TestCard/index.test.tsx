import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TestCard from '.';
import { Svg } from '../../../utils/constants';

test('should render testcard', () => {
  const handleClick = jest.fn();
  render(
    <TestCard
      icon={Svg.covid}
      testName={'covid'}
      onclick={handleClick}
      testid={'covid'}
    />,
  );

  const icon = screen.getByTestId('icon');
  const name = screen.getByText('covid');
  const test = screen.getByTestId('covid');

  fireEvent.click(icon);
  expect(handleClick).toBeCalled();
  expect(name).toBeInTheDocument();
  expect(test).toBeInTheDocument();
});
