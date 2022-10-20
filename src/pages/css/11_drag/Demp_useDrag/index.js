import { useCallback, useState, useRef } from "react";
import { Button } from "antd";
import "./index.css";

const Index = () => {
  const [on, setOn] = useState(false);

  return (
    <div>
      <p className="text">
        <p>这块区域可拖拽 最大面积由max-width/max-height决定</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut qui labore rerum placeat similique hic consequatur tempore doloribus aliquid alias, nobis voluptates.
          Perferendis, voluptate placeat esse soluta deleniti id!
        </span>
      </p>

      <hr />
      <p>我是可以拖拽的</p>
     
      <div style={{ position: "relative", minHeight: 100 }}>
        <div className="g-container">
          <div className="g-resize"></div>
          <div className="g-content"> Lorem ipsum dolor sit amet consectetur?</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
