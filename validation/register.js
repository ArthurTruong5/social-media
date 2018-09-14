const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateRegisterInput(data) {
  // define errors and stores it inside
  let errors = {};
  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email =!isEmpty(data.email) ? data.email : '';
  data.password =!isEmpty(data.password) ? data.password : '';
  data.password2 =!isEmpty(data.password2) ? data.password2 : '';
  console.log(data.email + " :Input Works");

  if(!Validator.isLength(data.name,{ min: 2, max: 30 })){
    errors.name = "Name must be between 2 and 30 characters";
  }
  // The ternary converted it to a empty string and gets moved to here. Validator will see an empty string and output an error. We can then display the error name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Blank Input! Must put a email";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Blank input, you must put in a password";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 50 })) {
    errors.password = "Password must be between 6 and 50 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Blank input, you must put in a password";
  }

  if (!Validator.isLength(data.password2, { min: 6, max: 50 })) {
    errors.password2 = "Password must be between 6 and 50 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }



  return {
    // Returning all errors
    errors,
    // Check to see is isValid error is empty
    // It's valid if the errors are empty
    isValid: isEmpty(errors)
  }


};
