import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Banner } from '.';
import { BannerText, Svg } from '../../../utils/constants';

export default {
  title: 'Molecule/Banner',
  component: Banner,
};

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;
export const BannerGrid = Template.bind({});
BannerGrid.args = {
    heading:BannerText[0],
    description:BannerText[1],
    image:Svg.Family
};
