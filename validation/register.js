const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateRegisterInput(data) {
  // define errors
  let errors = {};
  // (Ternary) If its not empty THEN output data.name but if it IS empty then just be an empty string. THIS CHANGES IT INTO A EMPTY STRING
  data.name = !isEmpty(data.name) ? data.name : '';
  data.name = !isEmpty(data.email) ? data.email : '';
  data.name = !isEmpty(data.password) ? data.password : '';
  data.name = !isEmpty(data.password2) ? data.password2 : '';
  // Checks length
  if(!Validator.isLength(data.name,{ min: 2, max: 30 })){
    errors.name = "Name must be between 2 and 30 characters";
  }
  // The empty string then gets checked here and outputs name field is required
  if (Validator.isEmpty(data.name)) {
    console.log('error')
    errors.name = "Name field is required";
  }

  return {
    errors,
    // Check to see is isValid error is empty
    isValid: isEmpty(errors)
  }
  // If the person sends it, it won' be a empty string

};
