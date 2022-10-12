import { useState, useEffect, useRef } from "react";
import { Button } from 'antd'
// 录音状态
const STATUS = {
  start: "start",
  stop: "stop",
};

const Index = () => {
  const [status, setStatus] = useState(STATUS.start);
  const recognitionRef = useRef(null);
  const contentRef = useRef(null);

  const initSpeechRecognition = () => {
    // eslint-disable-next-line no-undef
    recognitionRef.current = new webkitSpeechRecognition();

    // 配置设置以使每次识别都返回连续结果
    recognitionRef.current.continuous = true;

    // 配置应返回临时结果的配置
    recognitionRef.current.interimResults = true;

    // 正确识别单词或者短语时的事件处理函数
    recognitionRef.current.onresult = function (event) {
      let result = "";
      for (let i = 0, len = event.results.length; i < len; i++) {
        result += event.results[i][0].transcript;
      }

      contentRef.current.innerText = result;
    };
  };

  const handleToggle = () => {
    if (status === STATUS.start) {
      contentRef.current.innerText = "";
      setStatus(STATUS.stop);
      recognitionRef.current.start();
    } else {
      setStatus(STATUS.start);
      recognitionRef.current.stop();
    }
  };

  useEffect(() => {
    initSpeechRecognition();
  }, []);

  return (
    <div>
      <p>在Javascript应用程序中执行语音识别(记得打开浏览器录音权限)</p>
      <Button onClick={handleToggle}>{status === STATUS.start ? "开始" : "正在录音，点击结束"}录音</Button>
      <div ref={contentRef}></div>
    </div>
  );
};

export default Index;
