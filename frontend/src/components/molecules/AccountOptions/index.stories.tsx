import { ComponentStory } from '@storybook/react';
import React from 'react';
import { AccountOptions } from '.';
import { AccountHeadings, Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/AccountOptionsCard',
  component: AccountOptions,
};

const Template: ComponentStory<typeof AccountOptions> = (args) => (
  <AccountOptions {...args} />
);

export const AccountOpts = Template.bind({});
AccountOpts.args = {
  heading: AccountHeadings[1].heading,
  description: AccountHeadings[1].desc,
  icon: Svg.users,
};
