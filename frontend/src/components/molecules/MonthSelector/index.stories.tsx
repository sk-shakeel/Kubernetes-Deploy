import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MonthSelector from '.';

export default {
  title: 'Molecule/MonthSelector',
  Component: MonthSelector,
} as ComponentMeta<typeof MonthSelector>;

const Template: ComponentStory<typeof MonthSelector> = (args) => <MonthSelector/>;

export const SampleMonthSelector = Template.bind({});
SampleMonthSelector.args={};