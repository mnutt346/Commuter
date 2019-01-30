const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const bcrypt = require("bcrypt-nodejs");

const UsersSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    home: String,
    work: String
  },
  { collection: "userInfo" }
);

// Generate hash
UsersSchema.methods.generateHash = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// Check for valid password
UsersSchema.methods.validPassword = (password, hash) =>
  bcrypt.compareSync(password, hash);

module.exports = mongoose.model("userInfo", UsersSchema);
