import { useEffect } from "react";
import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from 'babylonjs';
import { Canvas } from './index.style'

const Index = () => {

  const createScene = (canvas, engine) => {
    
    const scene = new Scene(engine)

    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero())

    camera.attachControl(canvas, true);

    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)
    light.intensity = 0.7

    const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)

    return scene;
  }

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    const engine = new Engine(canvas)
    const scene = createScene(canvas, engine)

    engine.runRenderLoop(() => {
      scene.render()
    })
  }, [])
  return (
    <div>
      <p>Babylon 基础 Doc</p>

      <Canvas ></Canvas>
    </div>
  );
};

export default Index;
