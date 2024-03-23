import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MobileNumberVerificationPage from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Page/MobileNumberVerificationPage',
  component: MobileNumberVerificationPage,
} as ComponentMeta<typeof MobileNumberVerificationPage>;

const Template: ComponentStory<typeof MobileNumberVerificationPage> = () => (
  <BrowserRouter>
    <MobileNumberVerificationPage />
  </BrowserRouter>
);

export const MobileNumberVerification = Template.bind({});
