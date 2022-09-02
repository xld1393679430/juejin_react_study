import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0)

  // setCount是异步的 setTimeout闭包导致获取到的count是之前的值
  const handleAdd = () => {
    setCount(count + 1)
    setTimeout(() => {
      alert(count)
      setCount(count + 1)
    }, 2000)
  }
  return (
    <div>
     <p>count： {count}</p>
     <button onClick={handleAdd}>增加Count(count+1, 两秒后setTimeout再加1)</button>
    </div>
  );
};

export default Index;
