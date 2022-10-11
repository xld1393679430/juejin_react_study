import { Scene, Engine } from "babylonjs";

class BasicScene {
  scene: Scene;
  engine: Engine;

  constructor(canvas: HTMLCanvasElement) {
    this.engine = new Engine(canvas, true);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);
    return scene;
  }
}

export default BasicScene;
