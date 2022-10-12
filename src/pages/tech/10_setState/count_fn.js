import React, { useRef } from "react";
import { Button } from "antd";

const Index = ({ count }) => {
  // const { count } = props
  // const countRef = useRef(count)
  // countRef.current = count

  const handleShowCount = () => {
    setTimeout(() => {
      alert(count);
    }, 2000);
  };

  return (
    <div>
      <h1>index</h1>
      <p>count: {count}</p>
      <Button onClick={handleShowCount}>showCount</Button>
    </div>
  );
};

export default Index;
