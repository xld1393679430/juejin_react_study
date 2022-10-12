import { useState, useRef } from "react";
import { useEffect } from "react";

const Index = () => {
  const [fps, setFps] = useState(null);
  const requestId = useRef(null);

  const initFps = () => {
    let lastTime = performance.now();
    let frames = 0;

    const loop = () => {
      const curretnTime = performance.now();
      frames += 1;
      if (curretnTime > 1000 + lastTime) {
        const fps = Math.round((frames * 1000) / (curretnTime - lastTime));
        frames = 0;
        lastTime = curretnTime;

        console.log(fps);
        setFps(fps);
      }
      requestId.current = window.requestAnimationFrame(loop);
    };

    loop();
  };

  useEffect(() => {
    initFps();

    return () => {
      window.cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <div>
      <p>统计页面 FPS</p>

      <p>fps: {fps}</p>
    </div>
  );
};

export default Index;
