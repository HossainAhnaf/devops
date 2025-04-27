import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const containerName = process.env.REACT_APP_CONTAINER_NAME || 'Unknown'; // Declare inside render
    console.log("Host URL: " + containerName);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Use curly braces for dynamic content */}
            <h1 className="App-title">Simple React App from == {containerName}</h1> {/* Corrected */}
          </header>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/customerlist" />
            )} />
            <Route exact path='/customerlist' component={Customers} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
