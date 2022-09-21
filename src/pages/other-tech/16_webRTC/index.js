import { useRef } from "react";
import { Button } from "antd";
import WebRTC from "./utils/webRTC";

const Index = () => {
  const webRTCRef = useRef(new WebRTC());

  const handleStart = () => {
    webRTCRef.current.start();
  };

  const handlePause = () => {
    webRTCRef.current.pause();
  };

  const handleResume = () => {
    webRTCRef.current.resume();
  };

  const handleStop = () => {
    webRTCRef.current.stop();
  };

  const handleReplay = () => {
    const video = document.getElementById('video-replay')
    webRTCRef.current.replay(video);
  };

  const handleLive = () => {
    const video = document.getElementById('video-live')
    webRTCRef.current.live(video);
  };

  const handleClearVideo = () => {
    const videoReplay = document.getElementById('video-replay')
    const videoLive = document.getElementById('video-live')

    videoReplay.src = null
    videoLive.src = null
    videoLive.srcObject = null
  }
  
  return (
    <div>
      <p>WebRTC</p>
      <video id="video-replay" width="400" height="300" controls data-desc="录制回放"></video>
      <video id="video-live" width="400" height="300" controls data-desc="直播"></video>

      <Button onClick={handleStart}>开始录制</Button>
      <Button onClick={handlePause}>暂停录制</Button>
      <Button onClick={handleResume}>继续录制</Button>
      <Button onClick={handleStop}>结束录制</Button>

      <Button onClick={handleReplay}>录制回放</Button>
      <Button onClick={handleLive}>直播</Button>

      <Button onClick={handleClearVideo}>清除视频</Button>
    </div>
  );
};

export default Index;
