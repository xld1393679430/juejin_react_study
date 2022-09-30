const socket = require('socket.io')

function init(server) {
    let users = []
    const socketIO = socket(server, { cors: true })

    socketIO.on("connection", (socket) => {
        socket.on("disconnect", () => {
            // socket.id自动生成，每次连接都是新的id
            users = users.filter(item => item.socketId !== socket.id)
        })

        // 监听客户端链接
        socket.on("client_online", (data) => {
            const { nickName, id } = data
            const userInfo = {
                nickName,
                id,
                socketId: socket.id
            }

            users.push(userInfo)
            socket.emit("server_online", users)
        })

        // 监听消息
        socket.on("client_msg", (data) => {
            const { msg, nickName, roomId, userId } = data
            const param = {
                msg,
                nickName,
                userId,
                times: (new Date()),
            }

            const leftMessage = {
                ...param,
                type: 1,
            }

            const rightMessage = {
                ...param,
                type: 2,
            }

            // 向其他人发送消息
            socket.broadcast.emit("server_msg", leftMessage)
            // 向当前发送者发送消息
            socket.emit("server_msg", rightMessage)
        })
    })
}

module.exports = init