const express = require("express");
const router = express.Router();
const Axios = require("axios");

require("dotenv").config();

// ---------------------------- POST COMMUTE DATA ----------------------------
const convertTime = (date, time) => {
  let JSDate = new Date(`${date} ${time}`);
  let unixTime = Math.round(JSDate.getTime() / 1000);
  return unixTime;
};

const getCommuteData = async queryString => {
  return await Axios.get(queryString)
    .then(response => {
      let commuteTime =
        response.data.routes[0].legs[0].duration_in_traffic.text;
      return commuteTime;
    })
    .catch(err => err);
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

// ---------------------------- CONVERT MY COMMUTE TIMES ----------------------------

const convertMyCommute = time => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = `${year}-${month}-${day}`;
  let commuteTime = new Date(`${date}, ${time}`);
  let unixTime = Math.round(commuteTime.getTime() / 1000);
  return unixTime;
};

// ---------------------------- POST COMMUTE HOME ----------------------------

router.post("/commuteHome", async (req, res) => {
  let { home, work, homeCommuteTime, trafficModel } = req.body;
  let homeUnixTime = convertMyCommute(homeCommuteTime);
  let APIString = `https://maps.googleapis.com/maps/api/directions/json?origin=${work}&destination=${home}&departure_time=${homeUnixTime}&traffic_model=${trafficModel}&key=${
    process.env.API_KEY
  }`;

  await getCommuteData(APIString).then(commuteTime => {
    res.send(commuteTime);
  });
});

// ---------------------------- POST COMMUTE WORK ----------------------------

router.post("/commuteWork", async (req, res) => {
  let { home, work, workCommuteTime, trafficModel } = req.body;
  let workUnixTime = convertMyCommute(workCommuteTime);
  if (workUnixTime < new Date()) workUnixTime += 86400000;

  let APIString = `https://maps.googleapis.com/maps/api/directions/json?origin=${home}&destination=${work}&departure_time=${workUnixTime}&traffic_model=${trafficModel}&key=${
    process.env.API_KEY
  }`;
  await getCommuteData(APIString).then(commuteTime => {
    res.send(commuteTime);
  });
});

module.exports = router;
