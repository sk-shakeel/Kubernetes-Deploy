import { render, screen } from '@testing-library/react';
import React from 'react';
import { LabDetailsCard } from '.';
import { Svg } from '../../../utils/constants';

it('selected lab details card should render', () => {
  render(
    <LabDetailsCard
      isSelected={true}
      logo={Svg.altos}
      dataTestId={'selectedLabDetailsCard'}
      labName={''}
      rating={0}
      slotsAvailable={0}
      reportDetails={''}
      amount={0}
      noOfTests={0}
    />,
  );

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(4);

  const labCard = screen.getByTestId('selectedLabDetailsCard');
  expect(labCard).toBeInTheDocument();
});

it('selected lab details card should render', () => {
  render(
    <LabDetailsCard
      isSelected={false}
      logo={Svg.altos}
      dataTestId={'labDetailsCard'}
      labName={''}
      rating={0}
      slotsAvailable={0}
      reportDetails={''}
      amount={0}
      noOfTests={0}
    />,
  );

  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(3);

  const labCard = screen.getByTestId('labDetailsCard');
  expect(labCard).toBeInTheDocument();
});
