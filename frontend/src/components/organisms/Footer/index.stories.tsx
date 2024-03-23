import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const OrganismFooter = Template.bind({});
