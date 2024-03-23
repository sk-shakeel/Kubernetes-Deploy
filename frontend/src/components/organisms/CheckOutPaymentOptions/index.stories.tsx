import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CheckoutPaymentOptions from '.';

export default {
  title: 'Organisms/CheckoutPaymentOptions',
  Component: CheckoutPaymentOptions,
} as ComponentMeta<typeof CheckoutPaymentOptions>;

const Template: ComponentStory<typeof CheckoutPaymentOptions> = () => (
  <CheckoutPaymentOptions />
);
export const checkoutPayment = Template.bind({});
