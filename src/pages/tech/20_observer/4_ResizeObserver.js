import { useEffect, useRef } from "react";
import { message } from "antd";
import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
`;

const Index = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      message.info(`当前大小 ${entries[0].contentRect.width}`);
    });

    resizeObserver.observe(boxRef.current);

    setTimeout(() => {
      boxRef.current.style.width = "200px";
    }, 3000);
  }, []);

  return (
    <div>
      <p>ResizeObserver-- 监听元素的resize</p>
      <Box ref={boxRef}></Box>
    </div>
  );
};

export default Index;
