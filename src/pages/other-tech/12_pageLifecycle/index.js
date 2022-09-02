import { useEffect } from "react";
import { useState } from "react";

const Index = () => {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetCount((count) => count + 1);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p monitor-pv={`{count: ${count}}`}>无框架埋点体系: {count}</p>
    </div>
  );
};

export default Index;
