import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loginUser} from "../../actions/authAction";
import {withRouter} from "react-router-dom";
import classnames from "classnames";
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    // Binding
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {

    // If authenticated is true

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  // Create function
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);

    console.log(userData);
  }

  render() {
    const errors = this.state.errors;

    return (<div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            {errors.email && (<div className="alert alert-danger">{errors.email}</div>)}
            {errors.password && (<div className="alert alert-danger">{errors.password}</div>)}
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your TechConnect account
            </p>
            <form onSubmit={this.onSubmit}>

              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password} onChange={this.onChange} error={errors.password}/>

              <input type="submit" className="btn btn-info btn-block mt-4"/>
            </form>
          </div>
        </div>
      </div>
    </div>);
  }
}

// Login Prop Types
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Map to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors});

export default connect(mapStateToProps, {loginUser})(withRouter(Login));
