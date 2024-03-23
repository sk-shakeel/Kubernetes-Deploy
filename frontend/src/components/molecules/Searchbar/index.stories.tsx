import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Searchbar from '.';

export default {
  title: 'Molecule/Searchbar',
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = () => <Searchbar />;

export const SearchBar = Template.bind({});
