import { ComponentStory } from '@storybook/react';
import React from 'react';
import { AddressForm } from '.';

export default {
  title: 'Organisms/AddAddressOrganism',
  component: AddressForm ,
};

const Template: ComponentStory<typeof AddressForm > = (args) => <AddressForm  {...args}/>;

export const AddressFormOrganism = Template.bind({});
AddressFormOrganism.args = {
  
};