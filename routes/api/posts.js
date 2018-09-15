// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post Model
const Post = require('../../models/Post');
// Profile model
const Profile = require('../../models/Profile');

// Validation for posts
const validatePostInput = require('../../validation/post');

// res.json is similar to res.send but its going to output json
// @route GET api/posts/test
// @desc - Test post routes
// @access, Public
router.get('/test', (req,res) => res.json({msg: "Posts Works"}));

// @route POST api/posts
// @desc - Get posts
// @access, Public
router.get('/', (req,res) => {
  // Find model
  Post.find()
    // sort by Date - mongoose allows us to do this
    .sort({date: -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({nopostsfound: 'No posts found' }));
});

// @route POST api/posts/:id
// @desc - Get posts by id
// @access, Public
router.get('/:id', (req,res) => {
  // Find model
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({nopostofound: 'No post found with that id'}));
});

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

// @route DELETE api/posts
// @desc - Delete post
// @access, Private

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req,res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Post.findById(req.params.id)
      .then(post => {
        // Check for post owner
        // We want to compare. If its not equal to user.id. REMEMBER user.id will be looked at as a string. Post user will be not. Add toString
        if(post.user.toString() !== req.user.id){
          // 401 is a unauthorized status
          return res.status(401).json({ notauthorized: 'User not unauthorized'});
        }
        // If it passes then delete
        post.remove().then(() => res.json({ success: true}));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found"}))
    })
});

module.exports = router;
