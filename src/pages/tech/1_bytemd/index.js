import { useState } from "react";

const Index = () => {
  const [value, setValue] = useState("");

  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <div>
      <p>
        <a href="https://mp.weixin.qq.com/s/SVhNNFDr79soexkeQdwNVw" target={'_blank'} rel={'noreferrer'}>实现一个掘金 Markdown 编辑器</a>
      </p>
      <div>这个包太大了 不建议使用</div>
    </div>
  );
};

export default Index;
