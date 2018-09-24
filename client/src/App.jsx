import React, { Component } from 'react';
// Mimick a standard server
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Redux - Provider is a react component
import { Provider } from 'react-redux'
import store from './store';

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
