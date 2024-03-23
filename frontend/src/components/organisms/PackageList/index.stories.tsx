import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PackageList from '.';

export default {
  title: 'Organisms/PackageList',
  component: PackageList,
} as ComponentMeta<typeof PackageList>;

const Template: ComponentStory<typeof PackageList> = () => <PackageList />;

export const ListOfPackages = Template.bind({});
