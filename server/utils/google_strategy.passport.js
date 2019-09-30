const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

exports.initGoogleOAuth = function() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
    )
  );

  passport.serializeUser(function(user, done) {
    console.log('serializers');
    console.log(user);
    done(null, user);
  });
  passport.deserializeUser(function(userFromserializer, done) {
    done(null, userFromserializer);
  });
};
