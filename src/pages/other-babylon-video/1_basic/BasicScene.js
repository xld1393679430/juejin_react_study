class BasicScene {
  scene;
  engine;

  constructor(canvas) {
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine);
    return scene;
  }
}

export default BasicScene;
