const Validator = require('validator');
const isEmpty = require('./is-empty');

// Checks if the person entering the registration information is correct
module.exports = function validateLoginInput(data) {
  // define errors and stores it inside
  let errors = {};
  // (Ternary) If its not empty THEN data.name but if it IS empty then just be an empty string
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status =!isEmpty(data.status) ? data.status : '';
  data.skills =!isEmpty(data.skills) ? data.skills : '';
  console.log(data.email);

  if(!Validator.isLength(data.handle, { min: 2, max: 40})) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  };

  if(Validator.isEmpty(data.handle)){
    errors.handle = "Profile Handle is empty, handle is required";
  };

  if(Validator.isEmpty(data.status)){
    errors.status = "Status is empty, status is required";
  };

  if(Validator.isEmpty(data.skills)){
    errors.skills = "Status is empty, status is required";
  };

  if(!isEmpty(data.website)){
    if (!Validator.isURL(data.website)) {
    errors.website = "Not a Valid URL";
    }
  };

  if(!isEmpty(data.youtube)){
    if (!Validator.isURL(data.youtube)) {
    errors.youtube = "Not a Valid URL";
    }
  };

  if(!isEmpty(data.twitter)){
    if (!Validator.isURL(data.twitter)) {
    errors.twitter = "Not a Valid URL";
    }
  };

  if(!isEmpty(data.facebook)){
    if (!Validator.isURL(data.facebook)) {
    errors.facebook = "Not a Valid URL";
    }
  };

  if(!isEmpty(data.linkedin)){
    if (!Validator.isURL(data.linkedin)) {
    errors.linkedin = "Not a Valid URL";
    }
  };

  if(!isEmpty(data.instagram)){
    if (!Validator.isURL(data.instagram)) {
    errors.instagram = "Not a Valid URL";
    }
  };



  return {
    // Returning all errors
    errors,
    // Check to see is isValid error is empty
    // It's valid if the errors are empty
    isValid: isEmpty(errors)
  }


};
