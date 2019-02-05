const express = require("express");
const session = require("express-session");
const router = require("./router.js");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const uuid = require("uuid");

mongoose.connect("mongodb://mongo:27017/Commuter", {
  useNewUrlParser: true
});

require("../config/passport.js")(passport);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(router);
//Initialize passport
app.use(
  session({
    genid: req => uuid(),
    secret: "itsasecret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./authRoutes.js")(app, passport);

const port = 3001;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
