import React from "react";
import Control from "./Control";

export default {
  title: "Day03/Control",
  component: Control,
  argTypes: {
    noControl: {
      control: false
    },
    boolean: {
      control: "boolean",
    },
    number: {
      control: {
        type: "number",
        min: 1,
        max: 100,
        step: 5,
      },
    },
    range: {
      control: {
        type: "range",
        min: 1,
        max: 100,
        step: 5,
      },
    },
    object: {
      control: {
        type: "object",
      },
    },
    file: {
      control: {
        type: "file",
        accept: /(\.png|\.jpeg)$/,
      },
    },
    radio: {
      control: {
        type: "radio",
      },
      options: ["email", "phone", "mail"],
    },
    inlineRadio: {
      control: "inline-radio",
      options: ["email", "phone", "mail"],
    },
    check: {
      control: "check",
      options: ["email", "phone", "mail"],
    },
    inlineCheck: {
      control: "inline-check",
      options: ["email", "phone", "mail"],
    },
    select: {
      control: "select",
      options: ["A", "B", "C"],
    },
    text: {
      control: "text",
    },
    color: {
      control: {
        type: "color",
        presetColors: ["red", "green"],
      },
    },
    date: {
      control: "date",
    },
  },
};

const Template = (args) => <Control {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
