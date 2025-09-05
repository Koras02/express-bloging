const express = require("express");
const router = express.Router();
const app = express();

router.get("/hello", (req, res) => res.send("Hello"));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 2. 컨트롤러(Controller)
const sayHello = (res, send) => {
  res.send("Hello!");
};

app.listen(3000, () => {
  console.log("Server is Running http://localhost:3000");
});
