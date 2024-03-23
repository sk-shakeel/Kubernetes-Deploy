import { ComponentStory } from '@storybook/react';
import React from 'react';
import { OrderDetails } from '.';
import { ORDER_AMOUNT, ORDER_DETAILS } from '../../../utils/constants';

export default {
  title: 'Molecule/OrderDetails',
  component: OrderDetails,
};

const Template: ComponentStory<typeof OrderDetails> = (args) => (
  <OrderDetails {...args} />
);
export const OrderDetail = Template.bind({});
OrderDetail.args = {
  patientName: ORDER_DETAILS[0],
  testName: ORDER_DETAILS[1],
  address: ORDER_DETAILS[2],
  amount: ORDER_AMOUNT[0],
  instructions: ORDER_DETAILS[4],
  currency:'Rupee'
};
