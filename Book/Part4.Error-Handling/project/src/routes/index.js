const express = require("express");
const router = express.Router();

// 기본 라우터
router.get("/", (req, res) => {
  res.send("Main Page!");
});

router.get("/hello", (req, res) => {
  res.send("Hello Page");
});

// 방문 시 에러 발생 코드
router.get("/error", (req, res, next) => {
  const err = new Error("Test Error Handling!");
  err.status = 400;
  next(err);
});

module.exports = router;
