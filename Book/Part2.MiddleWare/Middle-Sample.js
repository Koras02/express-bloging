const express = require("express");
const app = express();

// 유저 데이터 저장
const users = [];

// 내장 미들웨어 적용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// 커스텀 미들웨어
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 테스트용
app.get("/", (req, res) => {
  res.send("Hello, Express MiddleWare!");
});

// 라우터
app.post("/user", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "JSON 데이터 받음", data: newUser });
});

// POST - 폼데이터 받기
app.post("/form", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "폼 데이터 받음", data: newUser });
});

// GET - 모든 유저 조회
app.get("/users", (req, res) => {
  res.json({ message: "저장된 유저 목록", data: users });
});

// 서버 실행
app.listen(3000, () => console.log(`서버 실행: http://localhost:3000`));
