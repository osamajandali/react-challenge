import React, { Component } from 'react';
import Home from './Views/Home';
import Person from './Views/Person'
import { Switch, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/:username" component={Person}/>
          </Switch>
      </div>
    );
  }
}

export default App;
