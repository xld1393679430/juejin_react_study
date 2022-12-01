import React, { useState, useEffect, FC, ReactNode, memo, ChangeEventHandler, useCallback, EventHandler, ChangeEvent } from "react";

interface IProps {
  title?: string;
  children: ReactNode
}

const Index: FC<IProps> = ({ title, children }) => {

  const handleChange1 = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    console.log(event.target.value, 11)
  }, [])

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 22)
  }

  return (
    <div>
      <p>DefaultProps1</p>
      <p>title: {title}</p>
      <input type="text" onChange={handleChange1} />
      <input type="text" onChange={handleChange2} />
    </div>
  );
};

Index.displayName = "DefaultProps";
Index.defaultProps = {
  title: "哈哈哈",
};

export default memo(Index);
