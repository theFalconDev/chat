const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const socket = require("socket.io");
const io = socket(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("socket ishlamoqda");

  // clientga xabar berish

  // socket.emit("o'roq", "Xush keldingiz chatimizga. Nima xizmat?");

  // socket.broadcast.emit("lapatka" ,"user guruhga qo'shildi")

  // socket.disconnect.emit("bolta" ,"user guruhdan chopildi")

  io.emit("arava", "salom xabar");

  // Cliendan xabar olish

  socket.on("chat-message", (xabar) => {
    io.emit("xabar", xabar);
  });
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server ${port} portda ishlayapti`);
});
