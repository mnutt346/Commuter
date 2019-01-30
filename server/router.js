const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

// ---------------------------- POST COMMUTE DATA ----------------------------
const convertTime = (date, time) => {
  let JSDate = new Date(`${date} ${time}`);
  let unixTime = Math.round(JSDate.getTime() / 1000);
  return unixTime;
};

const getCommuteData = async queryString => {
  return await axios
    .get(queryString)
    .then(response => {
      let commuteTime =
        response.data.routes[0].legs[0].duration_in_traffic.text;
      return commuteTime;
    })
    .catch(err => console.log("Error in API request: ", err));
};

router.post("/commute", async (req, res) => {
  let {
    origin,
    destination,
    departureTime,
    departureDate,
    trafficModel
  } = req.body;
  const departureTimeUnix = convertTime(departureDate, departureTime);
  let APIString = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=${departureTimeUnix}&traffic_model=${trafficModel}&key=${
    process.env.API_KEY
  }`;
  await getCommuteData(APIString).then(commuteTime => {
    res.send(commuteTime);
  });
});

// ---------------------------- Catch All ----------------------------
// router.get("/*", (req, res) => {
//   res.redirect("/");
// });

module.exports = router;
