// Authentication - Username, Email, Password

// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();

// res.json is similar to res.send but its going to output json
// @route GET api/post/test
// @desc - Test users routes
// @access, Public
router.get('/test', (req,res) => res.json({msg: "Users Works"}));

module.exports = router;
