module.exports = (app, passport) => {
  app.post(
    "/SignUp",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/SignUp",
      failureFlash: "Sorry, that email is already in use."
    })
  );

  app.post(
    "/LogIn",
    passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/LogIn",
      failureFlash: true
    })
  );
};
