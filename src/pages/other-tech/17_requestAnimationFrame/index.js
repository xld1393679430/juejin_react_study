import { Button } from "antd";
import { useRef } from 'react'

const Index = () => {
  let frameId = useRef(null)
  const handleMove = () => {
    const block = document.getElementById("block");
    let i = 0;
    function animateMove() {
      block.style.marginLeft = `${i}px`;
      i++;

      frameId.current = requestAnimationFrame(animateMove);
    }

    frameId.current = requestAnimationFrame(animateMove);
  };

  const handleStop = () => {
    cancelAnimationFrame(frameId.current)
  }


  return (
    <div>
      <p>requestAnimationFrame</p>
      <p id="block" style={{ width: "30px", height: "30px", backgroundColor: "skyblue" }}>
        11
      </p>
      <Button onClick={handleMove}>开始移动</Button>
      <Button onClick={handleStop}>停止移动</Button>
    </div>
  );
};

export default Index;
