const express = require("express");
const app = express();

// URL 파라미터 예시: /123
app.get("/user/:id", (req, res) => {
  res.send(`ID: ${req.params.id}`);
});

// 쿼리스트링 예시: /search?keyword=node
app.get("search", (req, res) => {
  res.send(`Search: ${req.query.keyword}`);
});
