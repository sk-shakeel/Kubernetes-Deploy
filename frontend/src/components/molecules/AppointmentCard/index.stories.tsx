import React from "react";
import {ComponentStory} from '@storybook/react'
import { AppointmentCard } from ".";
import { appointmentDetails, Svg } from "../../../utils/constants";

export default{
    title:'Molecule/AppointmentCard',
    component: AppointmentCard
}

const Template:ComponentStory<typeof AppointmentCard> = (args) => <AppointmentCard {...args}/>

export const AppointmentCards = Template.bind({})
AppointmentCards.args={
    icon:Svg.covid,
    testName:appointmentDetails[0],
    labName:appointmentDetails[1],
    patientName:appointmentDetails[2],
    appointmentDate:appointmentDetails[3],
    
}
    