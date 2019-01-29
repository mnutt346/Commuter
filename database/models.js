const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const UsersSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    home: String,
    work: String
  },
  { collection: "userInfo" }
);

// generating a hash
UsersSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UsersSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("userInfo", UsersSchema);
