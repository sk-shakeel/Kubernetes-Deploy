import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import VerifyOtp from '.';

export default {
  title: 'Organisms/VerifyOtp',
  Component: VerifyOtp,
} as ComponentMeta<typeof VerifyOtp>;

const Template: ComponentStory<typeof VerifyOtp> = (args) => (
  <VerifyOtp {...args} />
);

export const verifyOtp = Template.bind({});
verifyOtp.args = {
  username: 'Pattric',
};
