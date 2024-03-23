import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReportsTab from '.';

export default {
  title: 'Organisms/ReportsTab',
  component: ReportsTab,
} as ComponentMeta<typeof ReportsTab>;

const Template: ComponentStory<typeof ReportsTab> = () => (
  <ReportsTab />
);

export const Reports = Template.bind({});
