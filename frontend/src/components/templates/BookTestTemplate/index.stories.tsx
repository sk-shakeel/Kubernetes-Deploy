import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookTestTemplate from '.';
import { AddressCardOrg } from '../../organisms/AddressCardOrg';
import { LIST_OF_ADDRESSES, StepperLabText } from '../../../utils/constants';
import BottomNav from '../../molecules/BottomNav';
import TestStepper from '../../molecules/Stepper';

export default {
  title: 'Templates/BookTestTemplate',
  component: BookTestTemplate,
} as ComponentMeta<typeof BookTestTemplate>;

const Template: ComponentStory<typeof BookTestTemplate> = (args) => (
  <BookTestTemplate {...args} />
);

export const BookTest = Template.bind({});

BookTest.args = {
  stepper: (
    <TestStepper
      steps={StepperLabText}
      activeStep={3}
      handleBack={() => console.log('')}
    />
  ),
  page: <AddressCardOrg  />,
  bottomNav: <BottomNav label={'Complete Order'} displayCancel={true} />,
};
