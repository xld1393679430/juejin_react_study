import { useEffect } from "react";
import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3, Texture, SceneLoader } from "babylonjs";
import { Canvas } from "./index.style";
import LandscapeImg from "@/imgs/public.jpeg";

const Index = () => {
  const createScene = (canvas, engine) => {
    const scene = new Scene(engine);

    const camera = new FreeCamera("camera", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());

    camera.attachControl(canvas, true);

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // 创建小球
    const sphere = new MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
    sphere.position.y = 1;

    const ground = new MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    const groundMaterial = new StandardMaterial("Ground Material", scene);
    ground.material = groundMaterial;
    // ground.material.diffuseColor = Color3.Red();

    // 将图片填充到ground上
    let groundTexture = new Texture(LandscapeImg, scene);
    ground.material.diffuseTexture = groundTexture;

    // SceneLoader.ImportMesh('', "/", 'ss', scene, function(newMeshes) {
    //   newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    // })

    SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function (newMeshes) {
      newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    });

    return scene;
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const engine = new Engine(canvas);
    const scene = createScene(canvas, engine);

    engine.runRenderLoop(() => {
      scene.render();
    });
  }, []);
  return (
    <div>
      <p>Babylon 基础 Doc</p>

      <Canvas></Canvas>
    </div>
  );
};

export default Index;
