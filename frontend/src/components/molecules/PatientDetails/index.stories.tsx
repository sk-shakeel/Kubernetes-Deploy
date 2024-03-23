import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {PatientDetails} from '.';
export default {
  title: 'Molecules/PatientDetails',
  Component: PatientDetails,
} as ComponentMeta<typeof PatientDetails>;

const Template: ComponentStory<typeof PatientDetails> = (args) => (
  <PatientDetails {...args} />
);
export const patientdetails = Template.bind({});
patientdetails.args = {
  patientName: 'Patrick Smith',
  type: 'Self',
  gender: 'M',
  age: 30,
  testName: 'Covid RTPCR Test',
  cost: 1200,
  noOfTest: 2,
};
