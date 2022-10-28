import React from "react";
import Button from "./Button";

export default {
  title: "Day03/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked"
    },
    backgroundColor: {
      //   description: {
      // 	component: "啊啊啊啊啊"
      //   },
      description: "123",
      control: "color",
      table: {
        category: "colors",
        subcategory: "Btn Colors",
      },
    },
    btnType: {
      table: {
        category: "BtnTypes",
      },
    },
    children: {
      description: "这是btnType的说明",
      table: {
        type: {
          summary: "type-summary",
          detail: "detail",
        },
        defaultValue: {
          summary: "defaultValue-summary",
          detail: "提供更长版本的默认值",
        },
      },
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click"]
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Test = Template.bind({});
Test.args = {
  disabled: true,
  btnType: "primary",
  children: "我是按钮",
};
Test.parameters = {
  docs: {
    inlineStories: true,
    description: {
      story: "aaaa",
    },
    source: {
      // code: "Your code snippet goes here.",
      language: "jsx",
      type: "dynamic",
      format: true,
      dark: true
    }
  },
};
