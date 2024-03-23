import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TimeSelector from '.';
import { TimeSelectorValues } from '../../../utils/constants';

export default {
  title: 'Molecule/TimeSelector',
  Component: TimeSelector,
} as ComponentMeta<typeof TimeSelector>;

const Template: ComponentStory<typeof TimeSelector> = (args) => (
  <TimeSelector {...args} />
);

export const SampleTimeSelector = Template.bind({});
SampleTimeSelector.args = {
  timeHeader: '06AM - 12AM',
  timeValues: TimeSelectorValues[1],
};
