import { ComponentStory } from '@storybook/react';
import React from 'react';
import { ListOfServices } from '.';

export default {
  title: 'Organisms/ListOfServices',
  component: ListOfServices,
};

const Template: ComponentStory<typeof ListOfServices> = () => (
  <ListOfServices />
);

export const AddPatientOrg = Template.bind({});
AddPatientOrg.args = {};
