import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeSlotCard from '.';

export default {
  title: 'Molecule/TimeSlotCard',
  component: TimeSlotCard,
} as ComponentMeta<typeof TimeSlotCard>;

const Template: ComponentStory<typeof TimeSlotCard> = (args) => (
  <TimeSlotCard {...args} />
);

export const TimeSlotSelected = Template.bind({});

TimeSlotSelected.args = {
  date: 'Tue, Feb 23, 2022',
  time: '07.00 - 08.00 AM',
};
