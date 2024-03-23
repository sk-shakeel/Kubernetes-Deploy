import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestInfoOne from '.';
import theme from '../../../utils/theme';

export default {
  title: 'Atoms/TestInfoItemOne',
  component: TestInfoOne,
} as ComponentMeta<typeof TestInfoOne>;

const Template: ComponentStory<typeof TestInfoOne> = (args) => (
  <TestInfoOne {...args} />
);
export const InfoOne = Template.bind({});
InfoOne.args = {
  style: {
    backgroundColor: '#FBF7FC',
    padding: '2rem 1rem',
    borderRadius: theme.spacing(3)
  },
  variant: 'subtitle2',
  color: 'text.primary'
};
