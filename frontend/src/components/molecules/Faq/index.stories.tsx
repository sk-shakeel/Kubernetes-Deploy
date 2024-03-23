import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FAQ from '.';

export default {
  title: 'Molecule/Faq',
  Component: FAQ,
} as ComponentMeta<typeof FAQ>;

const Template: ComponentStory<typeof FAQ> = (args) => <FAQ {...args} />;
export const faq = Template.bind({});
faq.args = {
  question: 'How soon can i get the report?',
  testid: 'faq1',
};
