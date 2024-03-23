import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListOfTestimonialCards from '.';

export default {
  title: 'Organisms/ListOfTestimonialCards',
  component: ListOfTestimonialCards,
} as ComponentMeta<typeof ListOfTestimonialCards>;

const Template: ComponentStory<typeof ListOfTestimonialCards> = () => (
  <ListOfTestimonialCards />
);

export const ListOfTestimonials = Template.bind({});
