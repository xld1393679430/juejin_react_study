import { Button, Divider } from "antd";
import { useState } from "react";
import IntersectionObserver from "./1_IntersectionObserver";
import MutationObserver from "./2_MutationObserver";
import Proxy from "./3_Proxy";
import ResizeObserver from "./4_ResizeObserver";
import PerformanceObserver from "./5_PerformanceObserver";
import ReportingObserver from './6_ReportingObserver'

const Index = () => {
  const [demo, setDemo] = useState(1);

  return (
    <div>
      <p>
        <a href="https://mp.weixin.qq.com/s/-fLZe164aWAaPJ55iZ_m2w">【来源】浏览器的 6 种 Observer，你用过几种？</a>
      </p>
      <Button onClick={() => setDemo(demo + 1)}>切换查看下一个Demo</Button>
      <Button onClick={() => setDemo(1)}>重置Demo</Button>
      <Divider />
      {demo === 1 && <IntersectionObserver />}
      {demo === 2 && <MutationObserver />}
      {demo === 3 && <Proxy />}
      {demo === 4 && <ResizeObserver />}
      {demo === 5 && <PerformanceObserver />}
      {demo === 6 && <ReportingObserver />}
    </div>
  );
};

export default Index;
