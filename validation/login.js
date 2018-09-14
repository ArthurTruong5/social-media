const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateLoginInput(data) {
  // define errors and stores it inside
  let errors = {};
  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string

  data.email =!isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  console.log(data.email);


  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Blank Input! Must put a email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Blank password, must put a password"
  }

  return {
    // Returning all errors
    errors,
    // Check to see is isValid error is empty
    // It's valid if the errors are empty
    isValid: isEmpty(errors)
  }


};
