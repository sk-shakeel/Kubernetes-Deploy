import React from "react";
import {ComponentStory } from '@storybook/react';
import { ReportCard } from ".";
import { reportCardDetails } from "../../../utils/constants";

export default{
    title:'Molecule/ReportCard',
    component:ReportCard
}

const Template : ComponentStory<typeof ReportCard> =(args)=>(<ReportCard {...args}/>)

export const ReportCards = Template.bind({})
ReportCards.args={
    status:'pending',
    labName:reportCardDetails[0],
    testName:reportCardDetails[1],
    date:reportCardDetails[3],
    time:reportCardDetails[4],
}