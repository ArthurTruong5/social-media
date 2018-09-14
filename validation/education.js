const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateEducationInput(data) {
  // define errors and stores it inside
  let errors = {};

  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string.
  data.school =!isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
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
  };
};
