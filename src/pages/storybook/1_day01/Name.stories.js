/**
 * https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
 */

import React from "react";

const List = ({ children }) => <div>{children}</div>;
const ListItem = () => <div>ListItem</div>;

const SubCom = () => <div>Sub 1</div>;

export default {
  title: "Name/Button",
  component: List,
  subcomponents: { SubCom },
};

export const Empty = (args) => <List {...args}>Empty</List>;

export const OneItem = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);
