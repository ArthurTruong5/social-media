import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// We need to use redux because we need to find if the user isAuthenticated
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// For more reference how to create private routes use this link - https://tylermcginnis.com/react-router-protected-routes-authentication/

// Spread operator
const PrivateRoute = ({component: Component, auth, ...rest}) => (
  // to add any proprs we use the spread operator
  // So whats its doing is checking to see if its authenticated and if it is than it will go ahead and load the component and if its not it will redirect us to login
  <Route

    {...rest}

    render = {props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login"/>
      )
    }
    />
);
// Prop types - this is a validator to ensure it is an object to reduce the amount of errors
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

// Checks to see the authentication of the user
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
