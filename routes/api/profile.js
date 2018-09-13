// Location, experience, social network link etc

// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Use for protected routes
const passport = require('passport');

// Load Profile Schema
const Profile = require('../../models/Profile');
// Load User Schema
const User = require('../../models/User');

// res.json is similar to res.send but its going to output json
// @route GET api/profile/test
// @desc - Test profile routes
// @access, Public
router.get('/test', (req,res) => res.json({msg: "Profile Works"}));

// @route GET api/profile/
// @desc - Get current users info
// @access, Private
router.get('/', passport.authenticate('jwt', { session: false }), (req,res) => {
  // initialize errors and put all errors into an object
  const errors = {}
  // Gives promise
  Profile.findOne({ user: req.user.id })
  .then(profile => {
    if(!profile) {
      errors.noprofile = "No profile for this user";
      return res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});

module.exports = router;
