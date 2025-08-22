const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middlewares/errors");

const app = express();

// 라우터 연결
app.use("/", routes);

// 에러 핸들링 미들웨어 (항상 라우터 뒤에)
app.use(errorHandler);

module.exports = app;
