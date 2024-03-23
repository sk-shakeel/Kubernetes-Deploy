import { ComponentStory} from "@storybook/react";
import React from "react";
import { CompanyLogo } from ".";

export default {
    title: "Atoms/Logo",
    component: CompanyLogo
}

const Template: ComponentStory<typeof CompanyLogo> = (args) => ( <CompanyLogo {...args} /> );

export const Logo = Template.bind({});
    Logo.args = {
        weight:'500'
    }
