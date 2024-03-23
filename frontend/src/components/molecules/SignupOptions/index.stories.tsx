import { ComponentStory } from '@storybook/react';
import React from 'react';
import { SignupOptions } from '.';

export default {
  title: 'Molecule/SignupOptions',
  component: SignupOptions,
};

const Template: ComponentStory<typeof SignupOptions> = () => <SignupOptions />;

export const SignupOption = Template.bind({});
SignupOption.args = {};
