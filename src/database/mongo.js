const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://localhost:27017/Commuter",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to database."))
  .catch(err => console.log("ERROR CONNECTING TO DATABASE: ", err));
