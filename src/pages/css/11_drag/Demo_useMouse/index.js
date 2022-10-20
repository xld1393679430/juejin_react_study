import { useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "antd";
import useMouse from "./useMouse";
import "./index.css";

const Index = () => {
  const [mouseable, setMouseable] = useState(false);
  const mouseDot = useRef(null);
  const position = useMouse({ on: mouseable });

  mouseDot.current = <div className="mouse-dot" style={{ left: position.x, top: position.y }}></div>;

  const renderMouseDot = useCallback(() => {
    if (mouseable) {
      return createPortal(mouseDot.current, document.getElementById("root"));
    }
    try {
      document.body.removeChild(mouseDot.current);
    } catch (error) {}
    return null;
  }, [position, mouseable]);

  return (
    <>
      {renderMouseDot()}
      <Button onClick={() => setMouseable(!mouseable)}>{mouseable ? "关闭" : "开启"}鼠标跟随效果</Button>
    </>
  );
};

export default Index;
