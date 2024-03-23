import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RtpcrInfo from '.';

export default {
  title: 'Molecule/RtpcrInfo',
  component: RtpcrInfo,
} as ComponentMeta<typeof RtpcrInfo>;

const Template: ComponentStory<typeof RtpcrInfo> = (args) => (
  <RtpcrInfo {...args} />
);
export const rtpecinfo = Template.bind({});

rtpecinfo.args = {
  cost: 1200,
  reportTime: 24,
};
