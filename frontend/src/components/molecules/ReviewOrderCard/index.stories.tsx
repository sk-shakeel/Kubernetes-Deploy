import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReviewOrderCard from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/ReviewOrderCard',
  component: ReviewOrderCard,
} as ComponentMeta<typeof ReviewOrderCard>;

const Template: ComponentStory<typeof ReviewOrderCard> = (args) => (
  <ReviewOrderCard {...args} />
);

export const ReviewOrder = Template.bind({});

ReviewOrder.args = {
  iconImg: Svg.altos,
  labName: 'Los Altos Center Lab',
  totalItem: 1200,
  discount: 100,
  grandTotal: 1100,
  currency: 'Dollar',
};
