const LocalStrategy = require("passport-local").Strategy;
const userInfo = require("../database/models.js");

module.exports = passport => {
  //serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    userInfo.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        process.nextTick(() => {
          userInfo.findOne({ email: email }, (err, user) => {
            if (err) return done(err);
            if (user)
              return done(
                null,
                false,
                req.flash("signupMessage", "That email is already taken.")
              );
            else {
              let newUserInfo = new userInfo();
              newUserInfo.email = email;
              newUserInfo.password = newUserInfo.generateHash(password);

              newUserInfo.save(err => {
                if (err) throw err;
                return done(null, newUserInfo);
              });
            }
          });
        });
      }
    )
  );
};
