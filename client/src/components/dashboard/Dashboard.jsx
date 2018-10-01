import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions.js';

class Dashboard extends Component {

  // We want to get called right away so we're going to use a lifecycle method
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default connect(null, { getCurrentProfile })(Dashboard);
