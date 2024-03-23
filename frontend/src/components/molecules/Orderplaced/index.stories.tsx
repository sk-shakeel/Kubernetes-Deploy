import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import OrderPlaced from '.';

export default {
  title: 'Molecule/OrderPlaced',
  Component: OrderPlaced,
} as ComponentMeta<typeof OrderPlaced>;

const Template: ComponentStory<typeof OrderPlaced> = (args) => <OrderPlaced />;
export const orderPlaced = Template.bind({});
