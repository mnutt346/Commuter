module.exports = (app, passport) => {
  app.post(
    "/SignUp",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "http://localhost:3001/#/SignUp",
      failureFlash: "Sorry, that email is already in use."
    })
  );

  app.post(
    "/LogIn",
    passport.authenticate("local-login", {
      failureRedirect: "http://localhost:3001/#/LogIn",
      failureFlash: true
    }),
    (req, res) => {
      res
        .cookie(req.user.id, req.sessionID)
        .redirect("http://localhost:3001/#/MemberCalculator");
    }
  );

  app.get("/user", (req, res) => {
    console.log(req.sessionID);
  });
};
