const express = require("express");
const router = require("./router.js");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../dist")));
app.use(router);
const port = 3001;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
