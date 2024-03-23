import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ServiceCard from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/ServiceCard',
  Component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => (
  <ServiceCard {...args} />
);
export const servicecard = Template.bind({});
servicecard.args = {
  icon: Svg.test,
  serviceName: '1600+ Tests',
  testid: 'test-service',
  iconwidth: '30px',
  iconheight: '30px',
};
