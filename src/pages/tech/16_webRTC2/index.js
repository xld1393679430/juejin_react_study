import { useRef } from "react";
import { Button } from "antd";

const Index = () => {
  const videoRef = useRef(null);

  const getLocalMediaStream = (mediaStream) => {
    videoRef.current.srcObject = mediaStream;
  };

  const handleStart = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 640,
          height: 480,
          frameRate: 15,
          facingMode: "user", // enviroment设置为后置摄像头, user设置为前置摄像头
          deviceId: undefined,
        },
        audio: false,
      })
      .then(getLocalMediaStream)
      .catch((error) => {
        console.log("navigator.getUserMedia error: ", error);
      });
  };

  return (
    <div>
      <p>WbeRTC -- ！！！有点问题！！！</p>
      <video ref={videoRef}></video>
      <Button onClick={handleStart}>开启 WbeRTC </Button>
    </div>
  );
};

export default Index;
