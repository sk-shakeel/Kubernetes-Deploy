import React from "react";
import {ComponentStory} from '@storybook/react'
import { LabDetailsCard } from ".";
import { labDetailsCardContent, labRatingSlots, Svg } from "../../../utils/constants";

export default{
    title:'Molecule/LabdetailsCard',
    component:LabDetailsCard
}

const Template: ComponentStory<typeof LabDetailsCard> = (args) => (
    <LabDetailsCard {...args} />
  );

export const LabDetailsCards = Template.bind({})
LabDetailsCards.args={
  logo:Svg.altos,
  labName:labDetailsCardContent[0],
  rating:labRatingSlots[0],
  slotsAvailable:labRatingSlots[1],
  reportDetails:labDetailsCardContent[3],
  amount:labRatingSlots[2],
  noOfTests:labRatingSlots[3]
}