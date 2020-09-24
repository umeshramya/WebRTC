const express = require('express');
const app = express();
const socketIO = require("socket.io");
const path = require('path');
const router = express.Router();
const server = app.listen(process.env.port || 3000);

const io = socketIO(server)

app.use(express.static('public'))

app.get("/", (req, res)=>{
    res.render("index.html")
}
   
)

let broadcaster

io.sockets.on("connection", socket => {
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});


socket.on("offer", (id, message) => {
    socket.to(id).emit("offer", socket.id, message);
});
socket.on("answer", (id, message) => {
  socket.to(id).emit("answer", socket.id, message);
});
socket.on("candidate", (id, message) => {
  socket.to(id).emit("candidate", socket.id, message);
});




console.log('Running at Port 3000');