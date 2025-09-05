const express = require("express");
const logger = require("./middles/logger");
const app = express();

app.use(logger); // 모든 요청 로그 확인

app.get("/text", (req, res) => {
  res.send("MiddleWare test");
});

app.listen(3000, () => console.log("Server is running 3000"));
