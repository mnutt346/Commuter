const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const UsersSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    home: String,
    work: String
  },
  { collection: "userInfo" }
);

module.exports = mongoose.model("userInfo", UsersSchema);
