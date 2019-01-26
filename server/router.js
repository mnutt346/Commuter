const express = require("express");
const router = express.Router();

router.post("/commute", (req, res) => {
  console.log("IN ROUTER POST");
});

module.exports = router;
