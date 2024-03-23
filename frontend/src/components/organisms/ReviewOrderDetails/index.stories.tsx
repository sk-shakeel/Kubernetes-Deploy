import { ComponentStory } from '@storybook/react';
import React from 'react';
import { ReviewOrderForm } from '.';
import { PATIENT_ORDER_DETAIL } from '../../../utils/constants';

export default {
  title: 'Organisms/ReviewOrderOrganism',
  component: ReviewOrderForm,
};

const Template: ComponentStory<typeof ReviewOrderForm> = (args) => <ReviewOrderForm {...args}/>;

export const ReviewOrderOrg = Template.bind({});
ReviewOrderOrg.args = {

};
