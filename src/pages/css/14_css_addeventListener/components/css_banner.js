import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
	to {
		transform: translateZ(0.1px);
	}
`;

const View = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  counter-reset: num 0;
  animation: ${scroll} 1s infinite;
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
`;

const Inner = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(calc(-100% * var(--index, 0)));
  transition: 0.3s;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: grid;
  place-content: center;
  counter-increment: num;
  background-color: blueviolet;
  color: #fff;
  transition: 1s;
  transform: translate3d(0, 0, -100px);
  &::after {
    content: counter(num);
    font-size: 60px;
  }
  &:nth-child(2n + 1) {
    background-color: tomato;
  }
  &:nth-child(3n + 2) {
    background-color: royalblue;
  }
  &:nth-child(5n + 3) {
    background-color: violet;
  }
  &:nth-child(7n + 4) {
    background: tan;
    color: #333;
  }
  &:nth-child(11n + 5) {
    background: yellowgreen;
  }
`;

const Index = () => {
  const view = useRef(null);
  const len = 3;

  const handleAnimationiteration = () => {
    const indexStr = getComputedStyle(view.current).getPropertyValue("--index");
    const index = Number(indexStr) || 0;
    if (index === len - 1) {
      view.current.style.setProperty("--index", 0);
    } else {
      view.current.style.setProperty("--index", index + 1);
    }
  };

  useEffect(() => {
    // handleAnimationiteration();
    view.current.addEventListener("animationiteration", handleAnimationiteration);
    // return () => {
    //   view.current.removeEventListener("animationiteration", handleAnimationiteration);
    // };
  }, [view.current]);
  return (
    <View ref={view}>
      <Inner>
        {Array.from({ length: len }).map((_, index) => (
          <Item key={index} />
        ))}
      </Inner>
    </View>
  );
};

export default Index;
