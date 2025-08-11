const express = require("express");
const app = express();

app.patch("/user/:id", (req, res) => {
  res.send(`${res.params.id}번 사용자 일부 정보 수정`);
});
