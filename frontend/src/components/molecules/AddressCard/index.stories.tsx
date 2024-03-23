import { ComponentStory } from '@storybook/react';
import React from 'react';
import { AddressCard } from '.';

export default {
  title: 'Molecule/AddressCard',
  component: AddressCard,
};

const Template: ComponentStory<typeof AddressCard> = (args) => <AddressCard {...args}/>;

export const SampleAddressCard = Template.bind({});
SampleAddressCard.args = {
  addressStatusstr : "Default Address",
  addressnameStr : "Home",
  addressStr : "2235 California Street Mountain View California APT#021 - 11023",
  isChecked : true
};
