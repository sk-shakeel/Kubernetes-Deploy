import { ComponentStory } from "@storybook/react";
import React from "react";
import AddPatientForm from ".";

export default{
    title : "Organisms/AddPatientForm",
    components: AddPatientForm
}

const Template : ComponentStory<typeof AddPatientForm> = (args) => <AddPatientForm/>

export const SampleAddPatientForm = Template.bind({});
SampleAddPatientForm.args={};