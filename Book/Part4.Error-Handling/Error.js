const express = require("express");
const app = express();

// 일반적인 라우트
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// 에러를 일부로 발생시키는 코드
app.get("/error", (req, res, next) => {
  const err = new Error("Warning! Error");
  err.status = 400; // 에러 코드 400 발생
  next(err); // 에러 핸들링 미들웨어 전달
});

// 에러 핸들링 미들웨어 (맨 아래에 정의)
app.use((err, req, res, next) => {
  console.error(err.stack); // 에로 로그 출력코드

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error!", // const로 선언한 err 또는 "Server Error" 메시지 출력
  });
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is Running http://localhost:3000");
});
