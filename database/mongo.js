const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose
  .connect("mongodb://mongo:27017/Commuter", { useNewUrlParser: true })
  .then(() => console.log("Connected to database."))
  .catch(err => console.log("ERROR CONNECTING TO DATABASE: ", err));
