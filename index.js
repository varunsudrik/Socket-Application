const express = require("express");
const { createServer } = require("node:http");
const path = require("path");
const app = express();
const server = createServer(app);
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

app.get("/dodo", (req, res) => {
  res.send("<h1>Dodo</h1>");
});
