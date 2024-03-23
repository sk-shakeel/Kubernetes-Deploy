import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CreditCard from '.';

export default {
  title: 'Molecule/CreditCard',
  Component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);
export const creditcard = Template.bind({});
creditcard.args = {
  cardHolder: 'Yessie',
  cardNumber: '1244123413453255',
  expiry: '02/25',
};
