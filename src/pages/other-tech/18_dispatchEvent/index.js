import React, { useEffect, useCallback } from "react";
import { message, Button } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function initDispatchEventSetItem() {
  // 事件派发
  const setItem = localStorage.setItem;
  localStorage.setItem = function (key, value, isListener = false) {
    if (isListener) {
      const setEvent = new Event("setItemEvent");
      setEvent.key = key;
      setEvent.value = value;
      // setEvent.isTrusted = "11"; // 无法修改原有的属性
      window.dispatchEvent(setEvent);
    }
    setItem.apply(this, arguments);
  };
}

const Index = () => {
  useEffect(() => {
    initDispatchEventSetItem();

    function handleMessage() {
      message.success("localStorage.setItem 事件被触发了");
    }
    window.addEventListener("setItemEvent", handleMessage);

    return () => {
      window.removeEventListener("setItemEvent", handleMessage);
    };
  }, []);

  const handleClick1 = useCallback(() => {
    localStorage.setItem("test1", "test1");
  }, []);

  const handleClick2 = useCallback(() => {
    localStorage.setItem("test2", "test2", true);
  }, []);

  const CodeBlock = ({ language, value }) => <pre>{value}</pre>


  return (
    <div>
      <p>dispatchEvent</p>
      <Button onClick={handleClick1}>调用localStorage.setItem（不需要监听）</Button>
      <Button onClick={handleClick2}>调用localStorage.setItem（需要监听）</Button>

      <SyntaxHighlighter showLineNumbers language="jsx" style={vscDarkPlus}>
        {String(initDispatchEventSetItem)}
      </SyntaxHighlighter>
    </div>
  );
};

export default Index;
