import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Day02/Badge",
  component: Badge,
  argTypes: {
    status: {
      name: "Badge Status",
      description: "Available options available to the Badge",
      options: ["positive", "negative", "warning", "error", "neutral"],
      table: {
        defaultValue: {
          summary: "positive",
        },
        type: {
          summary: "Shows options to the Badge",
          detail: "Listing of available options",
        },
      },
    },
    label: {
      name: "Badge Content",
      description: "Text shown by Badge",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "The label contents",
          detail: "Text displayed by the Badge",
        },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Test = Template.bind({});
Test.args = {
  status: "positive",
  label: "aaa",
};
