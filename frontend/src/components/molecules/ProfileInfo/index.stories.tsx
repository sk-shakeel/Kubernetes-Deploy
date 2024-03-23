import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileInfo from '.';

export default {
  title: 'Molecule/ProfileInfo',
  component: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

const Template: ComponentStory<typeof ProfileInfo> = (args) => (
  <ProfileInfo {...args} />
);

export const ProfileInfoCard = Template.bind({});

ProfileInfoCard.args = {
  userName: 'Patrick Smith',
  userEmail: 'patricksmith@gmail.com',
  userNumber: '3306173324',
};
