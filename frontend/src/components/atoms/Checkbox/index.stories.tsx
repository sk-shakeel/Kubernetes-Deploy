import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckboxBtn from '.';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxBtn,
} as ComponentMeta<typeof CheckboxBtn>;

const Template: ComponentStory<typeof CheckboxBtn> = (args) => (
  <CheckboxBtn {...args} />
);
export const CheckBox = Template.bind({});

CheckBox.args = {
  onClick: () => console.log(''),
  color: 'secondary',
};
