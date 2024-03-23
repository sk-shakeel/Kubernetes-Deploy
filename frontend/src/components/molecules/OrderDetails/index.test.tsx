import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { OrderDetails } from '.';
import { ORDER_AMOUNT, ORDER_DETAILS } from '../../../utils/constants';

it('Order details should render', () => {
  render(
    <OrderDetails
      currency={'Rupee'}
      patientName={ORDER_DETAILS[0]}
      testName={ORDER_DETAILS[1]}
      address={ORDER_DETAILS[2]}
      amount={ORDER_AMOUNT[0]}
      instructions={ORDER_DETAILS[4]}
      testId={'details'}
    />,
  );
  
  const icons = screen.getAllByTestId('icon');
  expect(icons).toHaveLength(3);

  const details = screen.getAllByTestId('details');
  expect(details).toHaveLength(2);

  const heading = screen.getByText('Instructions');
  expect(heading).toBeInTheDocument();

  const instructionBar = screen.getAllByTestId('icon')[2]
  expect(instructionBar).toBeVisible()
  fireEvent.click(instructionBar)
});
