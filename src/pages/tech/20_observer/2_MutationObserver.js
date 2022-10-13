import { Divider, Button, message } from "antd";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
  position: relative;
`;

const Index = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mutationObserver = new MutationObserver((mutationsList) => {
      console.log(mutationsList);
      message.info(`${mutationsList[0].type}发生了改变`)
    });

    mutationObserver.observe(boxRef.current, {
      attributes: true,
      childList: true,
    });

    setTimeout(() => {
      boxRef.current.style.backgroundColor = "red";
    }, 2000);
  }, [boxRef]);

  return (
    <div>
      <p>MutationObserver</p>
      <p>MutationObserver 可以监听对元素的属性的修改、对它的子节点的增删改</p>

      <Divider />

      <Box ref={boxRef}>
        <Button>光</Button>
      </Box>
    </div>
  );
};

export default Index;
