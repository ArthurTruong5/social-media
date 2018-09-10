// Authentication - Username, Email, Password

// To use the router we must use express

// Instead of app.get we use router.get
const express = require('express');
const router = express.Router();

// /api/users/test / res.json is similar to res.send but its going to output json
router.get('/test', (req,res) => res.json({msg: "Users Works"}));

module.exports = router;
