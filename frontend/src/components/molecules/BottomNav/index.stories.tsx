import { ComponentStory } from "@storybook/react";
import React from "react";
import BottomNav from ".";

export default {
    title : "Molecule/Bottom Navigation",
    component : BottomNav
}

const Template : ComponentStory<typeof BottomNav> = (args) => <BottomNav {...args} />;

export const SampleBottomNav = Template.bind({});
SampleBottomNav.args = {
    cancelClick: () => console.log("Canceled"),
    completeClick: () => console.log("Completed"),
    label: 'Complete Order',
    selectionDetail: <p>detail 12:00 Am</p>,
    displayCancel: true
}