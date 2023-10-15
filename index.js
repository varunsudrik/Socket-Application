const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const path = require("path");
const app = express();
const server = createServer(app);
app.use(express.static(path.resolve("./public")));
port = 4500;

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("message", msg);
    console.log("message: " + msg);
  });
});
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

app.get("/dodo", (req, res) => {
  res.send("<h1>Dodo</h1>");
});
