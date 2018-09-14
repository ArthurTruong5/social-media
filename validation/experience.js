const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateExperienceInput(data) {
  // define errors and stores it inside
  let errors = {};

  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string.
  data.title =!isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title is empty, title is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company is empty, this field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From is empty, this field is required";
  }

  return {
    // Returning all errors
    errors,
    // Check to see is isValid error is empty
    // It's valid if the errors are empty
    isValid: isEmpty(errors)
  }


};
