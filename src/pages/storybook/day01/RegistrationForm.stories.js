// RegistrationForm.stories.js|jsx

import React from "react";

import { screen, userEvent } from "@storybook/testing-library";

import RegistrationForm from "./RegistrationForm";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Day01/RegistrationForm",
  component: RegistrationForm,
};

const Template = (args) => <RegistrationForm {...args} />;

export const FilledForm = Template.bind({});
FilledForm.play = async () => {
  const emailInput = screen.getByLabelText(/email/, {
    selector: "input",
  });

  await userEvent.type(emailInput, "test@email.com", {
    delay: 100,
  });

  const passwordInput = screen.getByLabelText(/password/, {
    selector: "input",
  });

  await userEvent.type(passwordInput, "123456", {
    delay: 100,
  });
  const submitButton = screen.getByRole("button");

  await userEvent.click(submitButton);
};
