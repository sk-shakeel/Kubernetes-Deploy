import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HomeTemplate } from '.';

export default {
  title: 'Templates/HomeTemplate',
  Component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const homeTemplate = Template.bind({});
homeTemplate.args = {
};
