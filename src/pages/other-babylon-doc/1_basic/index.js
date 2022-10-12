import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Canvas } from "./index.style";
import LandscapeImg from "@/imgs/public.jpeg";

const Index = () => {
  const createScene = (canvas, engine) => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // 创建小球
    const sphere = new BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
    sphere.position.y = 1;

    const ground = new BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    const groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
    ground.material = groundMaterial;
    // ground.material.diffuseColor = BABYLON.Color3.Red();

    // 将图片填充到ground上
    let groundTexture = new BABYLON.Texture(LandscapeImg, scene);
    ground.material.diffuseTexture = groundTexture;

    // BABYLON.SceneLoader.ImportMesh('', "/", 'ss', scene, function(newMeshes) {
    //   newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    // })

    // BABYLON.SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function (newMeshes) {
    //   newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    // });

    return scene;
  };

  useEffect(() => {
    // !!! 这里配合Helmet通过cdn方式加载 需要setTimeout等待一会资源加载  有隐患
    setTimeout(() => {
      console.log(window, window.BABYLON);
      const canvas = document.querySelector("canvas");
      const engine = new BABYLON.Engine(canvas);
      const scene = createScene(canvas, engine);
  
      engine.runRenderLoop(() => {
        scene.render();
      });
    }, 60);
  }, []);

  return (
    <div>
      <Helmet>
        <script src="https://cdn.babylonjs.com/babylon.js" type="text/javascript" />
      </Helmet>
      <p>Babylon 基础 Doc</p>

      <Canvas></Canvas>
    </div>
  );
};

export default Index;
