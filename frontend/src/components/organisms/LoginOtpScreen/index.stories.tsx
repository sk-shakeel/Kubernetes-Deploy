import { ComponentStory } from '@storybook/react';
import React from 'react';
import LoginOtpScreen from '.';

export default {
  title: 'Organisms/LoginOtpScreen',
  component: LoginOtpScreen,
};

const Template: ComponentStory<typeof LoginOtpScreen> = () => (
  <LoginOtpScreen />
);

export const otpservice = Template.bind({});
otpservice.args = {};
