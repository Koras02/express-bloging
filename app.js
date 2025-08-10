const express = require("express"); // 익스프레스 모듈 가져옴
const app = express(); // 익스프레스 객체 생성
const port = 3000; // 포트 번호 설정

// 서버 포트 설정
app.get("/", (req, res) => {
  // 루트 경로에 대한 GET 요청 처리
  res.send("Hello, Express!"); // 문자열 전송
});

// 서버를 3000번 포트에 적용
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
