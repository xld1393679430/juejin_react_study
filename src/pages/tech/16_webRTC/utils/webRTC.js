class WebRTC {
  mediaRecoder = null;
  tracks = []; // 媒体数据
  options = {
    mimeType: "video/webm; codecs = vp8",
  };
  constraints = { video: true, audio: false };

  start() {
    this.tracks = [];
    navigator.mediaDevices.getDisplayMedia(this.constraints).then((stream) => {
      // 对音视频流操作
      this.mediaRecoder = new MediaRecorder(stream, this.options);

      this.mediaRecoder.ondataavailable = (event) => {
        console.log(event, 111);
        if (event.data.size > 0) {
          this.tracks.push(event.data);
        }
      };

      this.mediaRecoder.onstop = (event) => {
        console.log("************录制结束--回调************");
      };

      this.mediaRecoder.onpause = (event) => {
        console.log(event, "************onpause--回调************");
      };

      this.mediaRecoder.onresume = (event) => {
        console.log(event, "************onresume--回调************");
      };

      this.mediaRecoder.onerror = (event) => {
        console.log("************录制失败--回调************");
        this.mediaRecoder = null;
      };

      this.mediaRecoder.start();
      console.log(this.mediaRecoder, "************开始录制************");
    }).catch(() => {
      alert("打开录制功能失败");
    });
  }

  pause() {
    if (!this.mediaRecoder || !this.mediaRecoder.stop) {
      alert("请先录制屏幕");
      return;
    }
    this.mediaRecoder.pause();
  }

  resume() {
    if (!this.mediaRecoder || !this.mediaRecoder.stop) {
      alert("请先录制屏幕");
      return;
    }
    this.mediaRecoder.resume();
  }

  stop() {
    if (!this.mediaRecoder || !this.mediaRecoder.stop) {
      alert("请先录制屏幕");
      return;
    }
    this.mediaRecoder.stop();

    // 手动结束的时候关闭Chrome录制窗口
    // 原理：一旦所有track停止，Chrome 的捕获提示也会消失。
    this.mediaRecoder.stream.getTracks().forEach((track) => track.stop());

    console.log("************录制结束************");
  }

  replay(video) {
    if (!this.mediaRecoder || !this.mediaRecoder.stop) {
      alert("请先录制屏幕");
      return;
    }
    if (!this.tracks?.length) {
      alert("请停止录制屏幕");
      return;
    }

    if (!video) {
      alert("请传入video容器");
      return;
    }
    const blob = new Blob(this.tracks, { type: "video/webm" });
    video.src = URL.createObjectURL(blob);
    video.srcObject = null;
    video.play();
  }

  live(video) {
    if (!this.mediaRecoder || !this.mediaRecoder.stop) {
      alert("请先录制屏幕");
      return;
    }
    video.srcObject = this.mediaRecoder.stream;
    video.play();
  }
}

export default WebRTC;
