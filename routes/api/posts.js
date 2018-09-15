// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post Model
const Post = require('../../models/Post');

// Validation for posts
const validatePostInput = require('../../validation/post');

// res.json is similar to res.send but its going to output json
// @route GET api/posts/test
// @desc - Test post routes
// @access, Public
router.get('/test', (req,res) => res.json({msg: "Posts Works"}));

// @route POST api/posts
// @desc - Create post
// @access, Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {

  console.log("Test");

  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if(!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  console.log("Test 2");

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    // Pull the name of the avatar from the user state
    avatar: req.body.avatar,
    user: req.user.id
  });

  // Save and send response as json
  newPost.save()
  .then(post => res.json(post));
});

module.exports = router;
