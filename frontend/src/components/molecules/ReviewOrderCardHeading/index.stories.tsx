import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReviewOrderCardHeader from '.';
import { Svg } from '../../../utils/constants';


export default {
  title: 'Organisms/ReviewOrderHeaderTemplate',
  component: ReviewOrderCardHeader,
} as ComponentMeta<typeof ReviewOrderCardHeader>;

const Template: ComponentStory<typeof ReviewOrderCardHeader> = (args) => (
  <ReviewOrderCardHeader {...args} />
);

export const ReviewOrderCardHeaders = Template.bind({});

ReviewOrderCardHeaders.args = {
    heading: 'Patient details',
    status:false,
    icon:Svg.user1,
};

