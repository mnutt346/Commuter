const userInfo = require("../database/models.js");

module.exports = (app, passport) => {
  // Sign User Up
  app.post(
    "/SignUp",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "http://localhost:3001/#/SignUp",
      failureFlash: "Sorry, that email is already in use."
    })
  );

  // Log User In
  app.post(
    "/LogIn",
    passport.authenticate("local-login", {
      failureRedirect: "http://localhost:3001/#/LogIn",
      failureFlash: true
    }),
    (req, res) => {
      userID = req.user.id;
      res.cookie(req.user.id, req.sessionID).redirect("/");
    }
  );

  // Set user's commutes
  app.post("/MyCommutes", (req, res) => {
    let userID = req.user.id;
    let { home, work } = req.body;
    let query = { _id: userID };
    let update = { home: home, work: work };
    userInfo.findOneAndUpdate(
      query,
      update,
      { upsert: true },
      (err, response) => {
        if (err) return res.sendStatus(500);
        else return res.sendStatus(200);
      }
    );
  });

  app.get("/userInfo", (req, res) => {
    console.log("HELLOOOO");
  });
};
