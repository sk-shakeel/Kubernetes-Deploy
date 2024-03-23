import { ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SelectPatientsOrg } from '.';

export default {
  title: 'Organisms/SelectPatients',
  component: SelectPatientsOrg,
};

const Template: ComponentStory<typeof SelectPatientsOrg> = (args) => (
  <BrowserRouter><SelectPatientsOrg {...args} /></BrowserRouter>
);

export const listOfService = Template.bind({});
listOfService.args = {
};
