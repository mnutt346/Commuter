const express = require("express");
const router = require("./router.js");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../dist")));
app.use(router);
const port = 3001;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
