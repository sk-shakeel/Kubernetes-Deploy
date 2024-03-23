import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MonthDaySelector from '.';

export default {
  title: 'Molecule/MonthDaySelector',
  Component: MonthDaySelector,
  argTypes: {
    selectorType: {
      options: ['day', 'month'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof MonthDaySelector>;

const Template: ComponentStory<typeof MonthDaySelector> = (args) => <MonthDaySelector {...args}/>;

export const SampleMonthDaySelector = Template.bind({});
SampleMonthDaySelector.args={
  selectorType : "day"
};