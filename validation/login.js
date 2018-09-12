const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateLoginInput(data) {
  // define errors and stores it inside
  let errors = {};
  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email =!isEmpty(data.email) ? data.email : '';
  console.log(data.email);

  if(!Validator.isLength(data.name,{ min: 2, max: 30 })){
    errors.name = "Name must be between 2 and 30 characters";
  }
  // The ternary converted it to a empty string and gets moved to here. Validator will see an empty string and output an error. We can then display the error name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Blank Input! Must put a email";
  }

  return {
    errors,
    // Check to see is isValid error is empty
    isValid: isEmpty(errors)
  }


};
