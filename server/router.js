const express = require("express");
const router = express.Router();
const axios = require("axios");
const passport = require("passport");
const mongoose = require("mongoose");
const userInfo = require("../database/models.js");
require("dotenv").config();

// ---------------------------- GET COMMUTE DATA ----------------------------
const convertTime = (date, time) => {
  let JSDate = new Date(`${date} ${time}`);
  let unixTime = Math.round(JSDate.getTime() / 1000);
  return unixTime;
};

const getCommuteData = async queryString => {
  return await axios
    .get(queryString)
    .then(response => {
      //   console.log(response.data.routes[0].legs[0].duration_in_traffic.text);
      let commuteTime =
        response.data.routes[0].legs[0].duration_in_traffic.text;
      return commuteTime;
    })
    .catch(err => console.log("Error in API request: ", err));
};

router.post("/commute", async (req, res) => {
  let { origin, destination, departureTime, departureDate } = req.body;
  const departureTimeUnix = convertTime(departureDate, departureTime);
  let APIString = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=${departureTimeUnix}&traffic_model=best_guess&key=${
    process.env.API_KEY
  }`;
  await getCommuteData(APIString).then(commuteTime => {
    res.send(commuteTime);
  });
});

// ---------------------------- POST LOGIN ----------------------------

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    successFlash: "Welcome!",
    failureRedirect: "/login",
    failureFlash: "Invalid username or password."
  })
);

module.exports = router;
