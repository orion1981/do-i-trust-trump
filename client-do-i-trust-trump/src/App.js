import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import GetStartedContainer from './containers/GetStartedContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/GetStarted" render={() =><GetStartedContainer />}/>

          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2>Do I Trust Trump</h2>
            </div>
            <p className="App-intro">
            Routes to Pages!
            <div>
              <ul>
                <li><Link to="/GetStarted" activeStyle={{ color: 'red' }}>Get Started</Link></li>
              </ul>
            </div>
            </p>
          </div>
        </Switch>
    </Router>
    );
  }
}

export default App;
