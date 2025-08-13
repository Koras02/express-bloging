const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public 폴더 파일을 / 로 제공
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("MiddleWare Start!");
  next(); // 다음 미들웨어로 이동
});

app.post("/user", (req, res) => {
  console.log(req.body); // JSON 파싱된 데이터
  res.send("JSON 데이터 받음");
});

app.post("/form", (req, res) => {
  console.log(req.body); // { name: "James", age: "20"}
  res.send("From 데이터 받음");
});

// 커스텀 미들웨어
const myLogger = (req, res, next) => {
  console.log(`[${new Date().toString()}] ${req.method} ${req.url}`);
  next(); // 다음 미들웨어로 이동
};

app.use(myLogger);
