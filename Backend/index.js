const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to world best mern series");
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
