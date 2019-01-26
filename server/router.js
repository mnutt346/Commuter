const express = require("express");
const router = express.Router();
require("dotenv").config();

const convertTime = (date, time) => {
  let JSDate = new Date(`${date} ${time}`);
  let unixTime = Math.round(JSDate.getTime() / 1000);
  return unixTime;
};

router.post("/commute", (req, res) => {
  let { origin, destination, departureTime, departureDate } = req.body;
  const departureTimeUnix = convertTime(departureDate, departureTime);
  let APIString = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=${departureTimeUnix}&traffic_model=best_guess&key=${
    process.env.API_KEY
  }`;
});

module.exports = router;
