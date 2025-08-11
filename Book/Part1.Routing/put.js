const express = require("express");
const app = express();

app.put("/user/:id", (req, res) => {
  res.send(`${req.params.id}번째 사용자 전체 정보 수정`);
});
