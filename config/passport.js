const JwTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// Searching for user that comes with the payload
const mongoose = require('mongoose');
// Comes from the User model
const User = mongoose.model('users');
// Get the keys to get the secret
const keys = require('../config/keys');

// empty object for options
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwTStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if(user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  }))
};
