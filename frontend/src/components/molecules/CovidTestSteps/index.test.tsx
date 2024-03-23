import { render, screen } from '@testing-library/react';
import CovidTestSteps from '.';
import React from 'react';
import { Svg } from '../../../utils/constants';

test('render CovidTestSteps', () => {
  render(<CovidTestSteps name={'Home visit'} iconImg={Svg.home} />);
  const test = screen.getByRole('covidtestinfoitemtwo');
  expect(test).toBeInTheDocument();
  expect(test).toHaveTextContent('Home visit');
});
