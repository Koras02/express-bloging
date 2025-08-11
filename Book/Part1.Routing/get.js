const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send("All User List");
});

app.get("/users/:id", (req, res) => {
  res.send(`특정 사용자 조회: ${req.params.id}`);
});
