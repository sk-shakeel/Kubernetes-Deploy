import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AfterAppointmentTemplate from '.';
import BottomNav from '../../molecules/BottomNav';
import OrderPlaced from '../../molecules/Orderplaced';
import { Svg } from '../../../utils/constants';
import Index from '../../atoms/Images';

export default {
  title: 'Templates/AfterAppointmentTemplate',
  component: AfterAppointmentTemplate,
} as ComponentMeta<typeof AfterAppointmentTemplate>;

const Template: ComponentStory<typeof AfterAppointmentTemplate> = (args) => (
  <AfterAppointmentTemplate {...args} />
);

export const AfterAppointmentBooking = Template.bind({});

AfterAppointmentBooking.args = {
  leftorganism: (
    <Index
      image={Svg.paymentsuccess}
      style={{ height: '436px', width: '391px' }}
    />
  ),
  rightorganism: <OrderPlaced />,
  bottomNav: <BottomNav label={'Track Your Order'} displayCancel={true} />,
};
