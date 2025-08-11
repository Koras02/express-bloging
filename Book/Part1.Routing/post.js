const express = require("express");
const app = express();

app.post("/users", (req, res) => {
  const user = req.body;
  res.send(`새 사용자 생성: ${JSON.stringify(user)}`);
});
