// class based component

import React, {Component} from "react";
import { connect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

// Steps
// 1. Create a class component
// 2. Import react
// 3. Import connect from react-router-dom
// 4. Import propTypes
// 5.Create state values -> constructor -> pass any props that come in -> super -> pass any props in super
// 6. Create a component state
// 7. Create a value of displaySocialInputs so we can toggle them and by default it'll be false
// 8. Handle will an empty string
// 9. All the social stuff will be empty and errors will be an empty object
// 10. We will get the errors from the state and put them from the redux state and put them into our component state.
// 11. Create a mapStateToProps -> We need the profile state and we need the errors
// 12. Create propTypes. This is typechecker to check for any errors. Its like a validator
// 13. Import TextFieldGroup


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      webiste: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    }
  };
  render() {
    return(
      <div className="create-profile">

        <div className="container">

          <div className="row">

            <div className="col-md-8 m-auto">

              <h1 className="display-4 text-center">Create your Profile</h1>

              <p className="lead text-center">
                We need some information from you so your profile can stand out
              </p>

              <small className="d-block pb-3">* = required fieldss</small>

            </div>

          </div>

        </div>

      </div>
    )
  }
}

// check reducer from the initialState
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default CreateProfile;
