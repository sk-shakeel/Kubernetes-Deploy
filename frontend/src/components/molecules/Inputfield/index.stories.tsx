import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputField from '.';

export default {
  title: 'Molecule/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const SignupFormInput = Template.bind({});
SignupFormInput.args = {
  label: 'First Name',
  placeholder: 'eg: Patrick',
  onChange: (e) => console.log(e),
};

export const SignupFormInput2 = Template.bind({});
SignupFormInput2.args = {
  label: 'Last Name',
  placeholder: 'eg: Smith',
  onChange: (e) => console.log(e),
};

export const SignupFormInput3 = Template.bind({});
SignupFormInput3.args = {
  label: 'Email id',
  placeholder: 'eg: patricksmith@gmail.com',
  onChange: (e) => console.log(e),
  testid: 'inputfield',
};
