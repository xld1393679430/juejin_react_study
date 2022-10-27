/* eslint-disable react/no-unknown-property */
import React from "react";
import { fireEvent, screen, userEvent } from "@storybook/testing-library";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  title: "Day01/PlayDemo",
};

// const Template = (args) => <MyComponent {...args} />;

const MyComponent1 = () => {
  return (
    <div>
      <input type="text" data-testid="aa" placeholder="1,请输入" />
      <input type="text" data-testid="bb" placeholder="2,请输入" />
      <input type="text" data-testid="combined" placeholder="combined,请输入" />
    </div>
  );
};

export const FirstPlayComponent = MyComponent1.bind({});
FirstPlayComponent.play = async () => {
  await userEvent.type(screen.getByTestId("aa"), "我是第一个 哈哈哈", {
    delay: 100,
  });
};

export const SecondPlayComponent = MyComponent1.bind({});
SecondPlayComponent.play = async () => {
  await userEvent.type(screen.getByTestId("bb"), "我是第二个 哈哈哈", {
    delay: 100,
  });
};

export const CombinedPlayComponent = MyComponent1.bind({});
CombinedPlayComponent.play = async () => {
  await FirstPlayComponent.play();
  await SecondPlayComponent.play();
  await userEvent.type(screen.getByTestId("combined"), "我是Combined", {
    delay: 200,
  });
};

const MyComponent2 = () => {
  return (
    <div>
      <button data-testid="btn1" onClick={() => alert("btn1被点击了")}>
        btn1
      </button>
      <button data-testid="btn2" onClick={() => alert("btn2被点击了")}>
        btn2
      </button>
    </div>
  );
};

export const ClickComponent = MyComponent2.bind({});
ClickComponent.play = async () => {
  await userEvent.click(screen.getByTestId("btn1"));
};

export const FireEventComponent = MyComponent2.bind({});
FireEventComponent.play = async () => {
  await fireEvent.click(screen.getByTestId("btn2"));
};

const MyComponent3 = () => {
  return (
    <div>
      <select role="listbox">
        <option value="one">111</option>
        <option value="two">222</option>
      </select>
    </div>
  );
};

export const ChangeEventComponent = MyComponent3.bind({});
ChangeEventComponent.play = async () => {
  const select = screen.getByRole("listbox");
  await userEvent.selectOptions(select, ["one"]);
  await sleep(2000);

  await userEvent.selectOptions(select, ["two"]);
  await sleep(2000);
};
