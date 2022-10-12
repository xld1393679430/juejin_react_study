/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { Button } from "antd";
import Demo_1 from "./电影效果";
import Demo_2 from "./模糊效果";

const Index = () => {
  const [index, setIndex] = useState(0);
  const list = [Demo_1, Demo_2];

  const handleToggle = () => {
    setIndex(index + 1);
  };

  const handleReset = () => {
    setIndex(0);
  };

  return (
    <>
      <Button onClick={handleToggle}>切换到下一个组件 index：{ index }</Button>
      <Button onClick={handleReset}>重置</Button>
      {list.map((Item, idx) => {
        if (idx === index) {
          return <Item key={idx} />;
        }
        return null;
      })}
    </>
  );
};

export default Index;
