const express = require("express");
const helloRouter = require("./routes/hello");
const app = express();

app.use("/", helloRouter);

app.listen(3000, () => console.log("Server running is port 3000"));
