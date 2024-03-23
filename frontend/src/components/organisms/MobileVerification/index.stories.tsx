import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MobileNumberVerification from '.';

export default {
  title: 'Organisms/MobileNumberVerification',
  component: MobileNumberVerification,
} as ComponentMeta<typeof MobileNumberVerification>;

const Template: ComponentStory<typeof MobileNumberVerification> = (args) => (
  <MobileNumberVerification {...args} />
);

export const MobileVerification = Template.bind({});

MobileVerification.args = {
  userName: "Patrick"
};
