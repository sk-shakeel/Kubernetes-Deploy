import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SignUpForm from '.';

export default {
  title: 'Organisms/SignUpForm',
  Component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args}/>;

export const SampleTimeSelector = Template.bind({});
SampleTimeSelector.args={
  firstNameHandle: (e) => {console.log(e.target.value)},
  secondNameHandle: (e) => {console.log(e.target.value)},
  emailNameHandle: (e) => {console.log(e.target.value)},
  continueBtnHandle : () => console.log("Clicked Continue"),
};