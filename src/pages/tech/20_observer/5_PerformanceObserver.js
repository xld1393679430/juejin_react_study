import { useCallback, useEffect } from "react";
import { Button, message } from "antd";

/**
 * performance 可以用 mark 方法记录某个时间点
 * measure 方法记录某个时间段
 * @returns
 */
const Index = () => {
  const measureClick = useCallback(() => {
    performance.measure("button clicked");
  }, []);

  useEffect(() => {
    const performanceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('entry:', entry)
        message.info(`${entry.entryType}被触发了`);
      });
    });

    performanceObserver.observe({ entryTypes: ["resource", "mark", "measure"] });

    performance.mark("registered-observer");
  }, []);

  return (
    <div>
      <p>PerformanceObserver</p>
      <p>浏览器提供了 performance 的 api 用于记录一些时间点、某个时间段、资源加载的耗时等</p>

      <img src="https://ak-d.tripcdn.com/images/0101m12000a1jcjzz0599_C_300_225_R5.jpg_.webp" />

      <Button onClick={measureClick}>Measure</Button>
    </div>
  );
};

export default Index;
