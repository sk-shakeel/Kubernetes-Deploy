import { screen, render } from '@testing-library/react';
import React from 'react';
import ReviewOrderCardHeader from '.';
import { Svg } from '../../../utils/constants';

it('should render reviewOrderHeader', () => {
  render(
    <ReviewOrderCardHeader
      heading={'patients details'}
      icon={Svg.user1}
      testid={'testid'}
      status={true}
    />,
  );

  const testid = screen.getByTestId('testid');
  expect(testid).toBeInTheDocument();

  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
