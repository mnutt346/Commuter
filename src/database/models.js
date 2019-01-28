const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UsersSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    home: String,
    work: String
  },
  { collection: "users" }
);

const users = mongoose.model("users", UsersSchema);
