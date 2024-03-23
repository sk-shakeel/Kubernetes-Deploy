import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Header } from '.';

export default {
  title: 'Organisms/Header',
  component: Header,
};

const Template: ComponentStory<typeof Header> = () => <Header/>;

export const HeaderOrganism = Template.bind({});

