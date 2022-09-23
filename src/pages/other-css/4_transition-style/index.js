import { useState } from "react";
import { Button } from "antd";
import "transition-style";

const Index = () => {
  const [show, setShow] = useState(false);
  const [pointer, setPointer] = useState(false)

  const handleStart = () => {
    setPointer(!pointer)
  }

  const handleOpen = () => {
    setShow(!show);
  };
  return (
    <div style={{position: 'relative'}}>
      <h2>使用transition-style实现动画</h2>

      <div style={{ fontSize: 40 }} transition-style={pointer ? 'in:wipe:up' : 'out:wipe:top-right'  }>
        ✋🏻
      </div>
      <Button onClick={handleStart}>切换手的动画</Button>

      <hr />
      <Button onClick={handleOpen}>{ show ? '关闭' : '打开' }抽屉弹窗</Button>

      <div style={{ position: 'absolute', top: 0, right: 0, width: 280, height: "100%", backgroundColor: 'skyblue' }} 
        transition-style={show ? 'in:wipe:left' : 'out:wipe:right' }>
          抽屉弹窗
        </div>
    </div>
  );
};

export default Index;
