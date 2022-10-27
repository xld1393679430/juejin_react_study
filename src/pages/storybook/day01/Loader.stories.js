import React, { useEffect, useState } from "react";

const List = ({ todos }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(todos?.splice(0, 10) || []);
  }, [todos]);

  console.log(list, "---list");

  return list.length ? (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  ) : (
    <div>Loading</div>
  );
};

export default {
  title: "Loader",
};

export const LoaderComponent = (args, { loaded: { todos } }) => <List {...args} todos={todos} />;
LoaderComponent.loaders = [
  async () => ({
    todos: await (await fetch("https://jsonplaceholder.typicode.com/todos")).json(),
  }),
];
