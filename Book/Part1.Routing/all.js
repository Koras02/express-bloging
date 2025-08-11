const express = require("express");
const app = express();

app.all("/test", (req, res) => {
  res.send(`모든 요청 처리: ${req.method}`);
});
