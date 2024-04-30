const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const app = express();

app.use(express.json());
app.use(cors());

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = 5000;
app.listen(port, () => {
  console.log(`MyNoteBook BE is listenng at port ${port}`);
});
