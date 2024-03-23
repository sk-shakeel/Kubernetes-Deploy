import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestStepper from '.';
import { StepperHomeText, StepperLabText } from '../../../utils/constants';

export default {
  title: 'Molecule/TestStepper',
  component: TestStepper,
} as ComponentMeta<typeof TestStepper>;

const Template: ComponentStory<typeof TestStepper> = (args) => (
  <TestStepper {...args} />
);

export const StepperMolecule = Template.bind({});
StepperMolecule.args = {
  steps: StepperHomeText.slice(0, 2),
  activeStep: 2,
  handleBack: () => console.log(''),
};
