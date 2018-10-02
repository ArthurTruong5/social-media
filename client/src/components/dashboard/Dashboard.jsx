import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions.js';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  // We want to get called right away so we're going to use a lifecycle method
  componentDidMount() {
    // this will add our profile to our state
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    // Initialize
    let dashboardContent;
    // if profile is null or loading is true within the redux state
    if(profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // checked if logged in user has pro  file data
      // Object.keys just gets the keys of an object
      // The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
      if(Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO: display user profile</h4>
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome { user.name }</p>
            <p>You have not yet set up a profile, pease add some info.</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
            Create profile
            </Link>
          </div>
        );
      }
    }
    // Before it gets called, it loads loading first. Remember JS is synchronous
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">

            <div className="col-md-12">

                <h1 className="display-4">Dashboard</h1>
                {dashboardContent}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
