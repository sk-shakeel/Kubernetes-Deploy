import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CovidInfo from '.';
import { Svg } from '../../../utils/constants';

export default {
  title: 'Organisms/CovidInfo',
  Component: CovidInfo,
} as ComponentMeta<typeof CovidInfo>;

const Template: ComponentStory<typeof CovidInfo> = (args) => (
  <CovidInfo {...args} />
);
export const covidinfo = Template.bind({});

covidinfo.args = {
  features: [
    {
      icon: Svg.home,
      feature: 'Home visit',
    },
    {
      icon: Svg.test,
      feature: '1 test included',
    },
    {
      icon: Svg.doctor,
      feature: 'Free consultation',
    },
    {
      icon: Svg.reports,
      feature: 'Online reports',
    },
  ],
  packageBenifits: [
    'To check if you have an active COVID-19 infection',
    'If you are showing symptoms of COVID-19 infection',
    'If you had a contact with someone with confirmed COVID-19',
  ],
  cost: 1200,
  reportTime: 24,
  packagePoints: [
    'This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.',
    'Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.',
    'Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ',
    'Municipal corporation guidelines.',
  ],
};
