import { Server } from "socket.io";

const startServer = () => {
  // const host = "192.168.0.108";
  // const port = 3033;

  // const io = new Server(port, { cors: true });
  // const sessionList = [];

  // io.on("connection", (socket) => {
  //   console.log("socket connected successful");

  //   // 用户进入聊天室
  //   socket.on("add user", ({ id }) => {
  //     socket.id = id;
  //     if (!sessionList.includes(id)) {
  //       sessionList.push(id);
  //     }
  //     console.log(`${id} 已加入房间, 房间人数: ${sessionList.length}`);
  //     console.log(JSON.stringify(sessionList));
  //     io.emit("user joined", { id, userList: sessionList });
  //   });

  //   // 发送新的消息
  //   socket.on("new message", ({ id, message }) => {
  //     io.emit("new message", { id, message });
  //   });

  //   // 断开链接
  //   socket.on("disconnect", () => {
  //     sessionList.splice(sessionList.indexOf(socket.id), 1);
  //     socket.broadcast.emit("user leave", {
  //       id: socket.id,
  //       userList: sessionList,
  //     });
  //   });
  // });
};

export { startServer }  ;
