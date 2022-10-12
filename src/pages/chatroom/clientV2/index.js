import React, { memo, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { nanoid } from "nanoid"; // ID生成器
import "./index.css";

const host = "127.0.0.1";
const port = 9999;

const ChatRoom = () => {
  const [socket, setSocket] = useState(io());
  const [message, setMessage] = useState("");
  const [content, setContent] = useState([]);
  const [userList, setUserList] = useState([]);

  const userInfo = useRef({ id: "", enterRoomTS: 0 });
  const roomState = useRef({
    content: [],
  });

  useEffect(() => {

    // 初始化用户信息
    userInfo.current = {
      id: nanoid(),
      enterRoomTS: Date.now(),
    };

    return () => {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, []);

  useEffect(() => {
    roomState.current.content = content;
  }, [content]);

  const initSocket = () => {
    const socket = io(`ws://${host}:${port}`);
    setSocket(socket);

    // 建立链接
    socket.on("connect", function () {
      console.log("连接成功");
      // 用户加入
      socket.emit("add user", userInfo.current);
    });

    // 用户加入聊天室
    socket.on("user joined", ({ id, userList }) => {
      const newContent = [...roomState.current.content];
      newContent.push({ id, message: `${id}加入`, type: "Tip" });

      setContent(newContent);
      setUserList(userList);
    });

    // 新消息
    socket.on("new message", ({ id, message }) => {
      const newContent = [...roomState.current.content];
      newContent.push({ id, message });

      setContent(newContent);
    });

    // 用户离开聊天室
    socket.on("user leave", ({ id, userList }) => {
      const newContent = [...roomState.current.content];
      newContent.push({ id, message: `${id}离开`, type: "Tip" });

      setContent(newContent);
      setUserList(userList);
    });
  };

  const handleEnterSend = (e) => {
    if (e.key === "Enter") {
      // 客户端发送新消息
      socket.emit("new message", { id: userInfo.current.id, message });

      setMessage("");
      e.preventDefault();
    }
  };

  const handleButtonSend = () => {
    // 客户端发送消息
    socket.emit("new message", {
      id: userInfo.current.id,
      message,
    });

    setMessage("");
  };

  const handleChange = (e) => {
    const val = e.target.value ?? "";
    setMessage(val);
  };

  const handleQuit = () => {
    // 断开链接
    if (socket) {
      socket.disconnect();
    }
  };

  return (
    <div>
      <h2>ChatRoom</h2>
      <h2>id: {userInfo.current.id}</h2>
      {/* <button onClick={startServer}>开启服务</button> */}
      <div className="ChatRoom">
        <div className="ChatRoom-header">
          <div>Chat Room · {userList.length}人</div>
          <button className="" onClick={initSocket}>
          initSocket
          </button>
          <button className="ChatRoom-header-quit" onClick={handleQuit}>
            退出
          </button>
        </div>
        <div className="ChatRoom-content">
          {content.map(({ id, message, type }, index) => {
            return (
              <div className="ChatRoom-content-item" key={`${id}-${index}`}>
                {type === "tip" ? (
                  <div className="ChatRoom-content-tip">{message}</div>
                ) : (
                  <React.Fragment>
                    <div className="ChatRoom-content-id">{id}</div>
                    <div className="ChatRoom-content-message">{message}</div>
                  </React.Fragment>
                )}
              </div>
            );
          })}
        </div>

        <textarea className="ChatRoom-message" cols={77} rows={10} value={message} onChange={handleChange} onKeyPress={handleEnterSend}></textarea>
        <button onClick={handleButtonSend}>Send</button>
      </div>
      {userList.map((userId) => {
        return <div key={userId}>{userId}</div>;
      })}
    </div>
  );
};

export default memo(ChatRoom);
