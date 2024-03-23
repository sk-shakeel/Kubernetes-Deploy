import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LoginTemplate from '.';
import {
  cost,
  features,
  packageBenifits,
  packagePoints,
  reportTime,
} from '../../../utils/constants';
import CovidInfo from '../../organisms/CovidInfo';

export default {
  title: 'Templates/TestCardList',
  Component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const logintemplate = Template.bind({});
logintemplate.args = {
  page: (
    <CovidInfo
      features={features}
      packageBenifits={packageBenifits}
      cost={cost}
      reportTime={reportTime}
      packagePoints={packagePoints}
    />
  ),
};
