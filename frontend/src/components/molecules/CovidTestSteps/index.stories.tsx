import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Svg } from '../../../utils/constants';
import CovidTestSteps from '.';

export default {
  title: 'Molecule/CovidTestSteps',
  component: CovidTestSteps,
} as ComponentMeta<typeof CovidTestSteps>;

const Template: ComponentStory<typeof CovidTestSteps> = (args) => (
  <CovidTestSteps {...args} />
);
export const CovidRtpcrTestSteps = Template.bind({});

CovidRtpcrTestSteps.args = {
  name: 'Home visit',
  iconImg: Svg.home,
};
