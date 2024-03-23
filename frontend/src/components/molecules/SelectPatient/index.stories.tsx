import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectPatient } from '.';

export default {
  title: 'Molecule/SelectPatient',
  component: SelectPatient,
} as ComponentMeta<typeof SelectPatient>;

const Template: ComponentStory<typeof SelectPatient> = (args) => (
  <SelectPatient {...args} />
);

export const SelectPatient_ = Template.bind({});
SelectPatient_.args = {
  name: 'Patrick Smith',
  details:'Self, Male, 30 years'
};