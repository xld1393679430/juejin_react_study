import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BasicScene from './BasicScene.js'
import { Canvas } from './index.style'

const Index = () => {

  useEffect(() => {
    const canvas = document.querySelector('canvas')

    setTimeout(() => {
      new BasicScene(canvas)
    }, 60)
    
  }, [])
  return (
    <div>
      <Helmet>
        <script src="https://cdn.babylonjs.com/babylon.js" type="text/javascript" />
      </Helmet>
      <p>Babylon 基础</p>

      <Canvas ></Canvas>
    </div>
  );
};

export default Index;
