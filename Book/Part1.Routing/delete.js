const express = require("express");
const app = express();

app.delete("/user/:id", (req, res) => {
  res.send(`${req.params.id}번 사용자 삭제`);
});
