import { useEffect, useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  font-size: 40px;
  border: 0;
  background-color: rgba(144, 41, 247, 0.515);
  padding: 0.4em 0.8em;
  color: #ffffff;
  border-radius: 0.12em;
  cursor: pointer;
  overflow: hidden;
  & > span {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #d573ff;
    z-index: -1;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
    z-index: 0;
    transition: width 1.8s;
  }
`;

const Index = () => {
  const btn = useRef(null);

  const handleHover = (ev) => {
    alert("触发了");
  };

  useEffect(() => {
    btn.current?.addEventListener("transitionend", handleHover);
    return () => {
      btn.current?.removeEventListener("transitionend", handleHover);
    };
  }, [btn.current]);

  return (
    <Button ref={btn}>
      <span>hover me</span>
    </Button>
  );
};

export default Index;
