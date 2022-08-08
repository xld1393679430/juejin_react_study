import React, { useState } from "react";
import { Button } from "antd";

const Index = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);
  const handleClick = () => {
    // setCount(preValue => preValue++)

    // setTimeout(() => {
    //    setCount(count++)
    // })

    // setTimeout(() => {
    //   setCount((prev) => prev++);
    // });

    // setTimeout(() => {
    //   setCount((prev) => ++prev);
    // });

    // setCount1(count1++);
    // setTimeout(() => {
    //   setCount2(count2++);
    // });

    setTimeout(() => {
      setCount1(count1++);
      setTimeout(() => {
        setCount2(count2++);
      });
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>
        按钮1--{count1}--{count2}
      </Button>
    </div>
  );
};

export default Index;
