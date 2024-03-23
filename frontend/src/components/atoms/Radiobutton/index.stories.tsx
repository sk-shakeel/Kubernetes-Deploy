import React from 'react';
import RadioButton from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const radioButton = Template.bind({});
radioButton.args = {
  isChecked: true,
};
