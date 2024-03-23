import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TestimonialCard from '.';

export default {
  title: 'Molecule/TestimonialCard',
  Component: TestimonialCard,
} as ComponentMeta<typeof TestimonialCard>;

const Template: ComponentStory<typeof TestimonialCard> = (args) => (
  <TestimonialCard {...args} />
);
export const testimonialcard = Template.bind({});

testimonialcard.args = {
  customerName: 'Abby',
  designation: 'San Jose, CA',
  testimony:
    'Very friendly and professional. Loved the follow-up and progress calls',
};
