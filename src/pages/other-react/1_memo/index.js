import { useEffect, useState, memo } from "react";
import { Button } from "antd";

const Test = ({ count }) => {
  console.log(count, "1111");

  useEffect(() => {
    console.log(count, "222");

    return () => {
      console.log(count, "333");
    };
  }, [count]);
  return (
    <div>
      <p>Text Component</p>
      <p>count：{count}</p>
    </div>
  );
};

const TestMemo = memo(Test, () => true); // 返回true组件不会再更新 和shouldComponentUpdate相反

const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>memo</p>
      <Button onClick={() => setCount(count + 1)}>Add: {count}</Button>

      <hr />
      <TestMemo count={count} />
    </div>
  );
};

export default Index;
