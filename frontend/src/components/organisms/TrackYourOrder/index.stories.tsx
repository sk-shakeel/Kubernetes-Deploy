import { ComponentStory } from '@storybook/react';
import React from 'react';
import TrackYouOrder from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Organisms/TrackYouOrder',
  component: TrackYouOrder,
};

const Template: ComponentStory<typeof TrackYouOrder> = (args) => (
  <TrackYouOrder {...args} />
);

export const trackyourorder = Template.bind({});
trackyourorder.args = {
  trackOfEvents: [
    {
      eventName: 'Order placed',
      icon: Svg.check,
      tagline: 'Placed on Mon, 22 Feb, 11.00 AM',
    },
    {
      eventName: 'Lab technician assigned',
      icon: Svg.labtechnician,
      tagline: 'Esther Howard',
    },
    {
      eventName: 'Sample collection',
      icon: Svg.pickup,
      tagline: 'On Tue, 23 Feb, 7.00 - 8.00 AM',
    },
    {
      eventName: 'Sample being examined',
      icon: Svg.testconducted,
      tagline: 'Estimated time - 24 hrs',
    },
    {
      eventName: 'Report ready',
      icon: Svg.filetext,
      tagline: '',
    },
  ],
  activeStep: 1,
};
