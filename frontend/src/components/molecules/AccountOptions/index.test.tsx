import { render, screen } from '@testing-library/react';
import React from 'react';
import { AccountOptions } from '.';
import { AccountHeadings, Svg } from '../../../utils/constants';

it('icons shoud render', () => {
  render(
    <AccountOptions
      heading={AccountHeadings[1].heading}
      description={AccountHeadings[1].desc}
      icon={Svg.logout}
    />,
  );
  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(2);

  const grid = screen.getByRole('heading');
  expect(grid).toBeInTheDocument();
});
