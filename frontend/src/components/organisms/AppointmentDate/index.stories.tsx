import { ComponentStory } from '@storybook/react';
import React from 'react';
import AppointmentDate from '.';

export default {
  title: 'Organisms/AppointmentDate',
  component: AppointmentDate,
};

const Template: ComponentStory<typeof AppointmentDate> = () => (
  <AppointmentDate />
);

export const appointment = Template.bind({});
