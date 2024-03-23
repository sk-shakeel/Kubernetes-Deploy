import React from 'react';
import { Locationpick } from './index';
import { Location } from '../../../utils/constants';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Molecule/Locationpicker',
  component: Location,
};

const Template: ComponentStory<typeof Locationpick> = (args) => (
  <Locationpick {...args} />
);

export const Locationpicker = Template.bind({});
Locationpicker.args = {
  text: Location,
};
