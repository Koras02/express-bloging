const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// public 폴더를 정적 파일 경로로 지정함
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log(`Server is running port ${port}`);
});
