// routing-server.js
const express = require("express");
const app = express();
const PORT = 3000;

// JSON 파싱 미들웨어
app.use(express.json());

// 메모리 저장
let users = [];

// 1. GET - 데이터 조회
app.get("/users", (req, res) => {
  res.send("GET 요청: 모든 사용자 조회");
});

// 2. GET(Parameter) - 단일 데이터 조회
app.get("/users/:id", (req, res) => {
  //   const { id } = req.params;
  //   res.send(`GET 요청: ${id}번 사용자 조회`);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "사용자를 찾을 수 없습니다" });
  }
  res.json(user);
});

// 3. POST - 데이터 생성
app.post("/users", (req, res) => {
  //   const newUser = req.body;
  //   res.send(`POST 요청 새 사용자를 생성합니다 -> ${JSON.stringify(newUser)}`);
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4. PUT - 전체 데이터 수정
app.put("/users/:id", (req, res) => {
  //   const { id } = req.params;
  //   const updatedUser = req.body;
  //   res.send(
  //     `PUT 요청: ${id}번 사용자 전체 수정 -> ${JSON.stringify(updatedUser)}`
  //   );
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === 1)
    return res.status.send(404).json({ message: "사용자를 찾을 수 없습니다 " });

  users[index] = { id, ...req.body };
  res.json(users[index]);
});

// 5. PATCH - 일부 데이터 수정
app.patch("/users/:id", (req, res) => {
  //   const { id } = req.params;
  //   const partialUpdate = req.body;
  //   res.send(
  //     `PATCH 요청: ${id}번 사용자 일부 수정 -> ${JSON.stringify(partialUpdate)}`
  //   );
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user)
    return res.status.send(404).json({ message: "사용자를 찾을 수 없습니다" });
});

// 6. DELETE - 데이터 삭제
app.delete("/users/:id", (req, res) => {
  //   const { id } = req.params;
  //   res.send(`DELETE 요청: ${id}번 사용자 삭제`);
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: "삭제 완료" });
});

// 7. ALL - 모든 메서드 처리
app.all("/test", (req, res) => {
  res.send(`ALL 요청: ${res.method} 메서드 처리`);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is Running: http://localhost:${PORT} `);
});
