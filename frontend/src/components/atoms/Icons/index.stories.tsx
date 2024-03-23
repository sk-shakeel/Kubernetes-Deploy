import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Icons } from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Atoms/Icons',
  component: Icons,
};

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  icon: Svg.home,
  width: '50px',
  height: '50px',
};
