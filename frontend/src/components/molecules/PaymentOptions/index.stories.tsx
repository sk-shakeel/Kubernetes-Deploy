import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PaymentOptions from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/PaymentOptions',
  Component: PaymentOptions,
} as ComponentMeta<typeof PaymentOptions>;

const Template: ComponentStory<typeof PaymentOptions> = (args) => (
  <PaymentOptions {...args} />
);
export const payment = Template.bind({});
payment.args = {
  options: [
    {
      icon: Svg.PayPal,
      value: 'paypal',
      label: 'Pay Pal',
    },
    {
      icon: Svg.GooglePay,
      value: 'googlepay',
      label: 'Google Pay',
    },
    {
      icon: Svg.NetBanking,
      value: 'netbanking',
      label: 'Net Banking',
    },
  ],
};
