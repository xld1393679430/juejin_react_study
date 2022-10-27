import React from "react";
import ButtonGroup from "./ButtonGroup";
// import { Primary, Default } from "./Button.stories";
import * as ButtonStories from './Button.stories'

export default {
  title: "ButtonStories",
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const ButtonGroup_horizontal = Template.bind({});
ButtonGroup_horizontal.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Default.args }],
  orientation: "horizontal",
};

export const ButtonGroup_vertical = Template.bind({});
ButtonGroup_vertical.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Default.args }],
  orientation: "verticel",
};
