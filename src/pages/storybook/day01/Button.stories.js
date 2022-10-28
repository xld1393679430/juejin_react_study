import React from "react";
import Button from "./Button";

export default {
  title: "Day01/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  args: {
    theme: 'light'
  }
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Default = ButtonTemplate.bind({});
Default.args = {
  btnType: "default",
  label: "Default Button",
  children: "Default 按钮1",
};
// 这里会覆盖上边default的parameters
Default.parameters = {
  backgrounds: {
    values: [
      { name: 'yellow', value: "#e1d600" },
      { name: 'blue', value: "#00f" }
    ]
  }
}



export const Primary = ButtonTemplate.bind({});
Primary.args = {
  btnType: "primary",
  label: "Primary Button",
  children: "Primary 按钮",
};

// 重命名
Primary.storyName = "Primary 按钮";

export const BlueButton = () => (
  <Button backgroundColor="#33a7cd" label="Button">
    蓝色按钮
  </Button>
);
