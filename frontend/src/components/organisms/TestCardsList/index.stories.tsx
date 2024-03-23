import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TestCardList from '.';

export default {
  title: 'Organisms/TestCardList',
  Component: TestCardList,
} as ComponentMeta<typeof TestCardList>;

const Template: ComponentStory<typeof TestCardList> = (args) => <TestCardList {...args}/>;

export const SampleTimeSelector = Template.bind({});
SampleTimeSelector.args={
    handleCovid : () => {console.log("Hello Covid")}
};