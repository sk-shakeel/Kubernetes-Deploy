import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabSelection from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Organisms/LabSelection',
  component: LabSelection,
} as ComponentMeta<typeof LabSelection>;

const Template: ComponentStory<typeof LabSelection> = () => (
  <BrowserRouter>
    <LabSelection />
  </BrowserRouter>
);

export const SelectLab = Template.bind({});
