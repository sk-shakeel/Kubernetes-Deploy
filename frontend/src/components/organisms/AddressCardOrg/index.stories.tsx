import { ComponentStory } from '@storybook/react';
import React from 'react';
import { AddressCardOrg } from '.';

export default {
  title: 'Organisms/AddressCardOrganism',
  component: AddressCardOrg,
};

const Template: ComponentStory<typeof AddressCardOrg> = (args) => <AddressCardOrg {...args}/>;

export const AddressCardOrganism = Template.bind({});
AddressCardOrganism.args = {
};
