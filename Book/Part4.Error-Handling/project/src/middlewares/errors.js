// 에러 핸들링 미들웨어
function errors(err, req, res, next) {
  console.error(err.stack);

  // 클라이언트에게 내려줄 에러 응답
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error!",
  });
}

module.exports = errors;
