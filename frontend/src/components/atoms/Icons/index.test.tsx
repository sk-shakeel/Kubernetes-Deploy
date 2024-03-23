import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icons } from './index';
import { Svg } from '../../../utils/constants';

it('should icon render', () => {
  render(<Icons icon={Svg.home} width={'20px'} height={'20px'} />);
  const icon = screen.getByTestId('icon');
  expect(icon).toBeInTheDocument();
});
