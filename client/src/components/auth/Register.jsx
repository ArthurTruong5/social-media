import React, { Component } from "react";
import classnames from "classnames";
// Any properties you have in your component you should map to prop types. - https://reactjs.org/docs/typechecking-with-proptypes.html
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// Connecting redux to this component
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";

// It's going to call register user in the actions it's going to dispatch to our producer and then it's
//
// going to fill that user object.
//
// And then remember we mapped that used we we mapped the off state to a property in this component and
//
// then we're going to test for the user if there is a user it should output the name Sylhet submit.

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    // Binding this
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  // We get the error with our redux state. That way we get the errors from our redux state it gets put into props with MAP state to props and then
  // once we receive new properties and if errors is included then we're going to set it to the components state.
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // Create function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // any action we bring in will be called to the props
    // The history is a react-router-dom object. withRouter High-Order-Component makes the history object available to the components that don't have a route, e.g <Route exact path="/register" component={Register} />.
    // However, the Register component has a route, therefore it gets the history object. I'm not sure why Brad used withRouter on Register to get to the history object, history is already available to the component.
    // The history is an object that has a method on it called push, don't mix with Array.prototype.push. This history push method takes a path which is "/login" that you created in the App.js component, and when it's run it mounts or navigates to the proper component which in this case Login.
    // Checkout react router dom docs for more info about withRouter and history.
    this.props.registerUser(newUser, this.props.history);

    console.log(newUser);
  }

  render() {
    // is-invalid will only output if e.g errors.name exist
    const errors = this.state.errors;

    const { user } = this.props.auth;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your TechConnect account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// If we want to get the authState to our componenent
// So we can access it with this.props.auth
// The auth comes from the root reducer => index.js
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
