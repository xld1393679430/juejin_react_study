import { useEffect, useRef } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
  color: #fff;
  position: relative;
`;

const Box1 = styled(Base)`
  top: 500px;
`;

const Box2 = styled(Base)`
  top: 800px;
`;

const Index = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((item) => {
          console.log(item.target, item.intersectionRatio);
        });
      },
      {
        threshold: [0.5, 1],
      }
    );

    intersectionObserver.observe(box1.current);
    intersectionObserver.observe(box2.current);
  }, [box1, box2]);

  return (
    <div>
      <p>IntersectionObserver 滚动触发监听</p>
      <p>可以看到元素 box1 和 box2 在可视范围达到一半（0.5）和全部（1）的时候分别触发了回调。</p>
      <p>我们在做一些数据采集的时候，希望知道某个元素是否是可见的，什么时候可见的，就可以用这个 api 来监听，还有做图片的懒加载的时候，可以当可视比例达到某个比例再触发加载。</p>
      <Box1 ref={box1}>BOX1</Box1>
      <Box2 ref={box2}>BOX2</Box2>
    </div>
  );
};

export default Index;
