import React from "react";
import Page from "./Page";

export default {
  title: "Day01/Page组件",
  component: Page,
  argTypes: {
    label: {
      options: ["Normal", "Bold", "Italic"],
    //   mapping: {
    //     Bold: <b>Bold</b>,
    //     Italic: <i>Italic</i>,
    //   },
    },
  },
};

const Template = (args) => <Page {...args} />;

export const DefaultPage = Template.bind({});
DefaultPage.args = {
  content: 1111,
  footer: "Built with Storybook",
};
