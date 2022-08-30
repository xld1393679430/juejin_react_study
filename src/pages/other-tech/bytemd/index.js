import { useState } from "react";
import { Editor } from "@bytemd/react";
import "bytemd/dist/index.css";

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
      <Editor value={value} onChange={handleChange} />
    </div>
  );
};

export default Index;
