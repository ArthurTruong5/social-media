import React, { Component } from 'react';
// Mimick a standard server
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Redux - Provider is a react component
import { Provider } from 'react-redux'
import store from './store';
// Decode the auth
import jwt_decode from 'jwt-decode';
// if token is true then yeah yeahh yeahhh
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';
import { logoutUser } from './actions/authAction';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Css
import './App.css';

// @@code <Route exact path= "/" component = { Landing } />
// @@desc Path = /. Landing is coming from the landing component. We put exact because it shows content from multiple routes

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  // Remember the object has a exp value
  if (decoded.exp < currentTime) {
  // Logout user
  store.dispatch(logoutUser());
  // TODO: Clear current profile
  // Redirect to login
  window.location.href = '/login';


  }

};

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>
        <div className= "App">
          <Navbar />
          <Route exact path= "/" component = {Landing} />
          <div className ="container">
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={Login } />
          </div>
          <Footer />
        </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
