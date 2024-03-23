import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderPlacedPage from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages/OrderPlacedPage',
  component: OrderPlacedPage,
} as ComponentMeta<typeof OrderPlacedPage>;

const Template: ComponentStory<typeof OrderPlacedPage> = () => (
  <BrowserRouter>
    <OrderPlacedPage />
  </BrowserRouter>
);

export const OrderPlaced = Template.bind({});
