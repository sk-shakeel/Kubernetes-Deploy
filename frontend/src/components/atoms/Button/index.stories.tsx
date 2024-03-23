import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CustomButton } from '.';
import { Icons } from '../Icons/index';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Atoms/Button',
  Component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const button = Template.bind({});
button.args = {
  label: 'Select text',
  style: {
    background: '#6B4DE0',
    color: '#FAFAFC',
    width: '222px',
    height: '42px',
    fontWeight: 600,
    borderRadius:'8px'
  }
}
export const button1 = Template.bind({});
button1.args = {
  label: 'Add Test',
  style: {
    color: 'primary.main',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '16px',
  },
  startIcon: <Icons icon={'Vector'} width={'12px'} height={'12px'} />,
  variant: 'text',
};
