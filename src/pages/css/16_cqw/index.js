import React, { useState } from "react";
import { Button } from "antd";
import "./index.css";

const Index = () => {
  const [text, setText] = useState("侦探");

  const handleToggle = () => {
    setText(text === "侦探" ? "窗前明月光" : "侦探");
  };

  return (
    <div>
      <p>自适应文本头像</p>
      <hr />

      <div className="avator">
        <div className="avator-inner" alt={text}>
          <div className="avator-container">
            <span>{text}</span>
          </div>
        </div>
      </div>

      <Button onClick={handleToggle}>切换内容(字体随内容增多而变小)</Button>
    </div>
  );
};

export default Index;
