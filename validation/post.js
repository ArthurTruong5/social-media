const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validatePostInput(data) {
  // define errors and stores it inside
  let errors = {};
  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string

  data.text =!isEmpty(data.text) ? data.text : '';

  // if its not at that length
  if(!Validator.isLength(data.text, {min: 10, max: 300 })) {
    errors.text = 'Post must be 10 and 30 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is blank";
  }



  return {
    // Returning all errors
    errors,
    // Check to see is isValid error is empty
    // It's valid if the errors are empty
    isValid: isEmpty(errors)
  }


};
