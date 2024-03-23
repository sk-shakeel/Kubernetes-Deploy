import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TestCard from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/TestCard',
  Component: TestCard,
} as ComponentMeta<typeof TestCard>;

const Template: ComponentStory<typeof TestCard> = (args) => (
  <TestCard {...args} />
);
export const testcard = Template.bind({});
testcard.args = {
  icon: Svg.covid,
  testid: 'covid-19',
  testName: 'Covid RTPCR',
};
