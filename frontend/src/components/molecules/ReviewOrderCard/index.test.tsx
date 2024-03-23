import { render, screen } from '@testing-library/react';
import ReviewOrderCard from '.';
import React from 'react';
import { Svg } from '../../../utils/constants';

test('render ReviewOrderCard', () => {
  render(
    <ReviewOrderCard
      iconImg={Svg.altos}
      labName={'Los Altos Center Lab'}
      totalItem={1200}
      discount={100}
      grandTotal={1100}
      currency={'Dollar'}
    />,
  );

  const labname = screen.getByTestId('labnameid');
  expect(labname).toBeInTheDocument();
  expect(labname).toHaveTextContent('Los Altos Center Lab');

  const totalitem = screen.getByTestId('totalitemid');
  expect(totalitem).toBeInTheDocument();
  expect(totalitem).toHaveTextContent('Item Total');

  const itemcost = screen.getByText(/1200/i);
  expect(itemcost).toBeInTheDocument();

  const discount = screen.getByTestId('discountid');
  expect(discount).toBeInTheDocument();
  expect(discount).toHaveTextContent('Discount');

  const grandtotal = screen.getByTestId('grandtotalid');
  expect(grandtotal).toBeInTheDocument();
  expect(grandtotal).toHaveTextContent('Grand Total');

  const grandtotalvalue = screen.getByText(/1100/i);
  expect(grandtotalvalue).toBeInTheDocument();
});
