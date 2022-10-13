import { useState } from "react";
import { Divider } from "antd";
import WithProxy from "./1_proxy";
import WithSymbol from './2_symbol'

const Index = () => {
  return (
    <div>
      <p>
        <a href="https://mp.weixin.qq.com/s/SusZu6rdVijZ-6seg9oa0Q">【来源】私有属性的 6 种实现方式，你用过几种</a>
      </p>
      <WithProxy />
      <Divider />
      <WithSymbol />
    </div>
  );
};

export default Index;
