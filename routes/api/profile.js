// Location, experience, social network link etc

// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();

// res.json is similar to res.send but its going to output json
// @route GET api/profile/test
// @desc - Test profile routes
// @access, Public
router.get('/test', (req,res) => res.json({msg: "Profile Works"}));

module.exports = router;
