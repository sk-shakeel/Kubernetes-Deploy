import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TestPackageCard from '.';
import { Svg } from '../../../utils/constants';
export default {
  title: 'Molecule/TestPackageCard',
  Component: TestPackageCard,
} as ComponentMeta<typeof TestPackageCard>;

const Template: ComponentStory<typeof TestPackageCard> = (args) => (
  <TestPackageCard {...args} />
);
export const testpackagecard = Template.bind({});
testpackagecard.args = {
  image: Svg.bodytest,
  testpackage: 'Full body checkup',
  cost: 1200,
  report_time: 24,
  noOfTest: 24,
};
