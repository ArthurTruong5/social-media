// Location, experience, social network link etc

// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Use for protected routes
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile')

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
// @desc - Get current user profile
// @access, Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      // populate fields from user schema = the name and avatar
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route GET api/profile/handle/:handle
// @desc - Get profile by handle
// @access, Public
router.get('/handle/:handle', (req,res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      // if no profile with that handle
      if(!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
      .catch (err => res.status(404).json({profile: "There is no profile for this user"}));
});

// @route GET api/profile/all
// @desc - Get all profiles
// @access, Public
router.get('/all', (req,res) => {
  const errors = {};
  // Find more than one
  Profile.find()
  .populate('user', ['name', 'avatar'])
  .then(profiles => {
    if(!profiles) {
      errors.noprofile = "There are no profiles";
      return res.status(404).json(errors);
    }
    res.json(profiles);
  })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }))
});

// @route GET api/profile/users/:user_id
// @desc - Get profile by user ID
// @access, Public
router.get('/user/:user_id', (req,res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      // if no profile with that handle
      if(!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
      .catch (err => res.status(404).json({profile: "There is no profile for this user"}));
});

// @route GET api/profile/
// @desc - Create or edit user profile
// @access, Private
// How the below code Works
// We're going to get everything from the req.body and fill the profileFields inside the object including the social object.
router.post(
  '/',
   passport.authenticate('jwt', { session: false }), (req,res) => {

     // Gets passed in
     const { errors, isValid } = validateProfileInput(req.body);

     // Check validation. If not valid then we want to return
     if (!isValid) {
       // return any errors with 400 status
       return res.status(400).json(errors);
     };

     const profileFields = {};
     profileFields.user = req.user.id;
     if(req.body.handle) profileFields.handle = req.body.handle;
     if(req.body.company) profileFields.company = req.body.company;
     if(req.body.website) profileFields.website = req.body.website;
     if(req.body.location) profileFields.location = req.body.location;
     if(req.body.bio) profileFields.bio = req.body.bio;
     if(req.body.status) profileFields.status = req.body.status;
     if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;
     // SKills - Split into array
     if(typeof req.body.skills !== 'undefined') {
       profileFields.skills = req.body.skills.split(',');
     }
     // Social
     // If we try to add profile fields it will say profilefields.social doesn't exist
     profileFields.social = {};
     if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
     if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
     if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
     if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
     if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

     // We're searching the user for the login user ID. If they have a profile, we're going uo update it
     Profile.findOne({ user: req.user.id }).then(profile => {
       if (profile) {
         // Update
         Profile.findOneAndUpdate(
           { user: req.user.id },
           { $set: profileFields },
           { new: true }
         ).then(profile => res.json(profile));
       } else {
         // Create

         // Check if handle exists
         Profile.findOne({ handle: profileFields.handle }).then(profile => {
           if (profile) {
             errors.handle = 'That handle already exists';
             res.status(400).json(errors);
           }

           // Save Profile
           new Profile(profileFields).save().then(profile => res.json(profile));
         });
       }
     });
   }
 );


module.exports = router;
