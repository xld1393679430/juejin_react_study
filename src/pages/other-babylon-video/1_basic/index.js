import { useEffect } from "react";
import BasicSccne from './BasicScene.js'
import { Canvas } from './index.style'

const Index = () => {

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    new BasicSccne(canvas)
  }, [])
  return (
    <div>
      <p>Babylon 基础</p>

      <Canvas ></Canvas>
    </div>
  );
};

export default Index;
