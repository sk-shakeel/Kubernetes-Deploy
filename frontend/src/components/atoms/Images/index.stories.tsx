import { ComponentStory} from "@storybook/react";
import React from "react";
import  Index from "./index"
import {Svg} from "../../../utils/constants"

export default {
    title: "Atoms/Images",
    component: Index,
}

const Template: ComponentStory<typeof Index> = (args) => ( <Index {...args} /> );

export const Image = Template.bind({});
    Image.args = {
        image: Svg.appstore,
    }